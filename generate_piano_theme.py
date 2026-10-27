#!/usr/bin/env python3
"""Render a short, original piano accompaniment with the system FluidSynth library."""

from __future__ import annotations

import ctypes
import ctypes.util
import os
import shutil
import subprocess
import wave
from pathlib import Path

import numpy as np


ROOT = Path(__file__).resolve().parent
SOUNDFONT = os.environ.get("MATH_SOUNDFONT", "/usr/share/sounds/sf2/TimGM6mb.sf2")
OUTPUT = ROOT / "audio" / "piano_theme.mp3"
RATE = 44_100
BPM = 78
BEAT = 60 / BPM


def _func(lib, name, restype, argtypes):
    fn = getattr(lib, name)
    fn.restype = restype
    fn.argtypes = argtypes
    return fn


def render_wav(path: Path) -> None:
    library = ctypes.util.find_library("fluidsynth")
    if not library:
        raise RuntimeError("libfluidsynth is required to generate the piano theme")
    if not Path(SOUNDFONT).is_file():
        raise RuntimeError(f"SoundFont not found: {SOUNDFONT} (set MATH_SOUNDFONT to a piano SoundFont)")

    lib = ctypes.CDLL(library)
    void = ctypes.c_void_p
    charp = ctypes.c_char_p
    i = ctypes.c_int
    f = ctypes.c_float
    settings_new = _func(lib, "new_fluid_settings", void, [])
    settings_num = _func(lib, "fluid_settings_setnum", i, [void, charp, ctypes.c_double])
    synth_new = _func(lib, "new_fluid_synth", void, [void])
    load_sf = _func(lib, "fluid_synth_sfload", i, [void, charp, i])
    program_select = _func(lib, "fluid_synth_program_select", i, [void, i, i, i, i])
    note_on = _func(lib, "fluid_synth_noteon", i, [void, i, i, i])
    note_off = _func(lib, "fluid_synth_noteoff", i, [void, i, i])
    write = _func(
        lib,
        "fluid_synth_write_s16",
        i,
        [void, i, ctypes.POINTER(ctypes.c_int16), i, i, ctypes.POINTER(ctypes.c_int16), i, i],
    )

    settings = settings_new()
    settings_num(settings, b"synth.sample-rate", RATE)
    settings_num(settings, b"synth.gain", 0.52)
    synth = synth_new(settings)
    soundfont_id = load_sf(synth, os.fsencode(SOUNDFONT), 1)
    if soundfont_id < 0:
        raise RuntimeError("FluidSynth could not load the piano SoundFont")
    if program_select(synth, 0, soundfont_id, 0, 0) != 0:
        raise RuntimeError("FluidSynth could not select the acoustic grand piano")

    # A gentle C–G–Am–F progression, played as arpeggiated piano with a simple
    # high-note response. The phrase repeats four times without copying a song.
    chords = [(48, 52, 55), (43, 47, 50), (45, 48, 52), (41, 45, 48)]
    events: list[tuple[int, int, int]] = []  # sample, note-off/on flag, MIDI note

    def add_note(start_beat: float, duration_beats: float, note: int, velocity: int) -> None:
        start = int(start_beat * BEAT * RATE)
        end = int((start_beat + duration_beats) * BEAT * RATE)
        events.append((start, 1, note * 128 + velocity))
        events.append((end, 0, note))

    for bar in range(16):
        chord = chords[bar % len(chords)]
        start = bar * 4
        root, third, fifth = chord
        # Soft bass notes anchor each measure.
        add_note(start, 1.65, root - 12, 62)
        add_note(start + 2, 1.55, root - 12, 48)
        # Eighth-note arpeggios leave space for the spoken teaching.
        pattern = [root, fifth, third + 12, fifth, root + 12, fifth, third + 12, fifth]
        for step, note in enumerate(pattern):
            add_note(start + step * 0.5, 0.38, note, 48 if step % 2 else 56)
        # A restrained melody lands at the end of each second bar.
        if bar % 2 == 1:
            melody = [root + 19, root + 16, root + 14, root + 12]
            for step, note in enumerate(melody):
                add_note(start + 2 + step * 0.5, 0.43, note, 38 + (step % 2) * 4)

    events.sort(key=lambda event: (event[0], event[1]))  # release a note before retriggering it
    total_frames = int(16 * 4 * BEAT * RATE) + int(2.2 * RATE)
    left = np.zeros(total_frames, dtype=np.int16)
    right = np.zeros(total_frames, dtype=np.int16)
    position = 0

    def render_until(end: int) -> None:
        nonlocal position
        while position < end:
            count = min(4096, end - position)
            lbuf = (ctypes.c_int16 * count)()
            rbuf = (ctypes.c_int16 * count)()
            write(synth, count, lbuf, 0, 1, rbuf, 0, 1)
            left[position:position + count] = np.ctypeslib.as_array(lbuf)
            right[position:position + count] = np.ctypeslib.as_array(rbuf)
            position += count

    for sample, is_on, note_value in events:
        sample = min(sample, total_frames)
        render_until(sample)
        if is_on:
            note, velocity = divmod(note_value, 128)
            note_on(synth, 0, note, velocity)
        else:
            note_off(synth, 0, note_value)
    render_until(total_frames)

    stereo = np.column_stack((left, right)).astype(np.float32)
    envelope = np.ones(total_frames, dtype=np.float32)
    fade_in = int(0.9 * RATE)
    fade_out = int(2.2 * RATE)
    envelope[:fade_in] = np.linspace(0, 1, fade_in, endpoint=False)
    envelope[-fade_out:] = np.linspace(1, 0, fade_out)
    stereo *= envelope[:, None]
    peak = float(np.max(np.abs(stereo))) or 1.0
    stereo *= min(1.0, 28_000 / peak)
    pcm = np.clip(stereo, -32768, 32767).astype("<i2")
    path.parent.mkdir(parents=True, exist_ok=True)
    with wave.open(str(path), "wb") as out:
        out.setnchannels(2)
        out.setsampwidth(2)
        out.setframerate(RATE)
        out.writeframes(pcm.tobytes())


def main() -> None:
    if not shutil.which("ffmpeg"):
        raise RuntimeError("ffmpeg is required to encode the piano theme")
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    temporary = OUTPUT.with_suffix(".wav")
    render_wav(temporary)
    subprocess.run(
        ["ffmpeg", "-y", "-loglevel", "error", "-i", str(temporary), "-c:a", "libmp3lame", "-b:a", "192k", str(OUTPUT)],
        check=True,
    )
    temporary.unlink(missing_ok=True)
    print(f"wrote {OUTPUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
