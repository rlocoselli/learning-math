#!/usr/bin/env python3
"""Create paced, narrated math lessons with a piano soundtrack (Pillow + ffmpeg + gTTS)."""

from __future__ import annotations

import hashlib
import json
import os
import re
import subprocess
import sys
from pathlib import Path

from gtts import gTTS
from PIL import Image, ImageDraw, ImageFont

from video_scenes import SCENES
from captions import write_vtt


ROOT = Path(__file__).resolve().parent
W, H = 1280, 720
FPS = 10
FD = "/usr/share/fonts/truetype/dejavu"
OUT_DIR = ROOT / "videos"
INTRO_DUR = 3.8
OUTRO_DUR = 4.2
MIN_STEP_DUR = 9.2
SPEECH_LEAD_IN = 0.65
PIANO_TRACK = ROOT / "audio" / "piano_theme.mp3"
NARRATION = ROOT / "video_narration.json"
CACHE_DIR = ROOT / ".video-cache" / "narration"

LANGS = ["en", "pt", "fr"]
STEP_LABEL = {"en": "STEP", "pt": "ETAPA", "fr": "ÉTAPE"}
OUTRO_TITLE = {"en": "Your turn!", "pt": "Agora é sua vez!", "fr": "À vous de jouer !"}
OUTRO_SUBTITLE = {
    "en": "Pause and try a similar problem on your own.",
    "pt": "Pause e tente resolver um problema parecido sozinho.",
    "fr": "Faites une pause et essayez un exercice similaire.",
}

BG = (19, 25, 22)
CHALK = (238, 240, 232)
DIM = (172, 187, 178)
ACCENT = (255, 214, 90)
LINE = (66, 84, 74)

_noise = Image.effect_noise((W, H), 26).convert("RGB")
_board = Image.blend(Image.new("RGB", (W, H), BG), _noise, 0.045)
_bd = ImageDraw.Draw(_board)
_bd.rectangle([12, 12, W - 13, H - 13], outline=LINE, width=3)


def font(size: int, bold: bool = False):
    name = "DejaVuSans-Bold.ttf" if bold else "DejaVuSans.ttf"
    return ImageFont.truetype(os.path.join(FD, name), size)


def clamp(value: float, low: float = 0.0, high: float = 1.0) -> float:
    return low if value < low else high if value > high else value


def wrap(text: str, fnt, max_width: int) -> list[str]:
    lines, current = [], ""
    for word in text.split():
        candidate = (current + " " + word).strip()
        if fnt.getlength(candidate) <= max_width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_reveal(draw, lines: list[str], reveal: float, fnt, fill, x: int, y: int, line_height: int):
    total = sum(len(line) for line in lines)
    target = int(total * clamp(reveal))
    count, current_y = 0, y
    for line in lines:
        if count >= target:
            break
        shown = min(len(line), target - count)
        draw.text((x, current_y), line[:shown], font=fnt, fill=fill)
        count += len(line)
        current_y += line_height


def draw_centered_reveal(draw, text: str, reveal: float, fnt, fill, center_x: int, y: int):
    shown = int(len(text) * clamp(reveal))
    draw.text((center_x, y), text[:shown], font=fnt, fill=fill, anchor="mm")


def draw_formula_reveal(draw, text: str, reveal: float, fnt, fill, center_x: int, y: int):
    width = fnt.getlength(text)
    shown = int(len(text) * clamp(reveal))
    draw.text((center_x - width / 2, y), text[:shown], font=fnt, fill=fill)


def localized(value, lang: str):
    return value.get(lang, value.get("en", "")) if isinstance(value, dict) else value


def make_slides(topic: dict, lang: str) -> list[dict]:
    slides = [{
        "kind": "intro",
        "title": localized(topic["title"], lang),
        "sub": localized(topic.get("subtitle", ""), lang),
    }]
    for index, step in enumerate(topic["steps"], start=1):
        formulas = localized(step.get("formulas", []), lang)
        slides.append({
            "kind": "step",
            "num": index,
            "title": localized(step["title"], lang),
            "body": wrap(localized(step.get("body", ""), lang), font(30), W - 220),
            "formulas": formulas,
        })
    slides.append({
        "kind": "outro",
        "title": OUTRO_TITLE[lang],
        "sub": OUTRO_SUBTITLE[lang],
    })
    return slides


def render(slide: dict, lang: str, time_on_slide: float, duration: float, progress: float) -> Image.Image:
    image = _board.copy()
    draw = ImageDraw.Draw(image)
    draw.text((W - 40, H - 40), "Mathematics Mastery", font=font(20), fill=DIM, anchor="rb")
    draw.rounded_rectangle([82, 654, W - 82, 662], radius=4, fill=(39, 49, 43))
    draw.rounded_rectangle([82, 654, 82 + (W - 164) * clamp(progress), 662], radius=4, fill=ACCENT)

    if slide["kind"] == "intro":
        draw.text((W / 2, 142), "M A T H E M A T I C S   M A S T E R Y", font=font(24), fill=DIM, anchor="mm")
        draw_centered_reveal(draw, slide["title"], time_on_slide / 1.55, font(70, True), CHALK, W / 2, 300)
        title_width = font(70, True).getlength(slide["title"]) * clamp(time_on_slide / 1.55)
        draw.line([W / 2 - title_width / 2, 368, W / 2 + title_width / 2, 368], fill=ACCENT, width=3)
        if time_on_slide > 0.9:
            draw_centered_reveal(draw, slide["sub"], (time_on_slide - 0.9) / 1.25, font(28), DIM, W / 2, 440)
    elif slide["kind"] == "step":
        label = f"{STEP_LABEL[lang]} {slide['num']}"
        label_width = font(24, True).getlength(label) + 36
        draw.rounded_rectangle([80, 62, 80 + label_width, 108], radius=10, outline=ACCENT, width=2)
        draw.text((98, 85), label, font=font(24, True), fill=ACCENT, anchor="lm")
        draw_reveal(draw, [slide["title"]], time_on_slide / 0.8, font(44, True), CHALK, 82, 138, 60)
        draw_reveal(draw, slide["body"], (time_on_slide - 0.55) / 2.8, font(29), DIM, 82, 218, 42)
        formula_reveal = (time_on_slide - 2.2) / 2.4
        formula_y = 405
        for formula in slide["formulas"]:
            formula_font = font(44, True)
            while formula_font.getlength(formula) > W - 160 and formula_font.size > 32:
                formula_font = font(formula_font.size - 2, True)
            if formula_reveal > 0:
                draw_formula_reveal(draw, formula, formula_reveal, formula_font, ACCENT, W / 2, formula_y)
            formula_y += 68
    else:
        draw.text((W / 2, 210), "M A T H   M I S S I O N   C O M P L E T E", font=font(23), fill=DIM, anchor="mm")
        draw_centered_reveal(draw, slide["title"], time_on_slide / 1.2, font(64, True), CHALK, W / 2, 330)
        draw_centered_reveal(draw, slide["sub"], (time_on_slide - 0.6) / 1.5, font(28), ACCENT, W / 2, 420)
    return image


def split_sentences(text: str) -> list[str]:
    sentences = [part.strip() for part in re.split(r"(?<=[.!?])\s+", text.strip()) if part.strip()]
    return sentences or [text.strip()]


def split_for_steps(text: str, step_count: int) -> list[str]:
    sentences = split_sentences(text)
    groups = []
    for index in range(step_count):
        start = round(index * len(sentences) / step_count)
        end = round((index + 1) * len(sentences) / step_count)
        groups.append(" ".join(sentences[start:end]))
    return groups


def narration_path(topic_id: str, lang: str, index: int, text: str) -> Path:
    digest = hashlib.sha256(text.encode("utf-8")).hexdigest()[:12]
    path = CACHE_DIR / lang / topic_id / f"step-{index:02d}-{digest}.mp3"
    if not path.is_file():
        path.parent.mkdir(parents=True, exist_ok=True)
        try:
            gTTS(text=text, lang=lang, slow=True).save(str(path))
        except Exception as exc:
            path.unlink(missing_ok=True)
            raise RuntimeError(f"Could not create {lang} speech for {topic_id}: {exc}") from exc
    return path


def audio_duration(path: Path) -> float:
    result = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", str(path)],
        check=True,
        capture_output=True,
        text=True,
    )
    return float(result.stdout.strip())


def render_visual(slides: list[dict], lang: str, durations: list[float], outpath: Path) -> None:
    frame_count = sum(int(duration * FPS) for duration in durations)
    command = [
        "ffmpeg", "-y", "-loglevel", "error",
        "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}", "-r", str(FPS), "-i", "-",
        "-c:v", "libx264", "-preset", "medium", "-crf", "21", "-pix_fmt", "yuv420p",
        "-movflags", "+faststart", str(outpath),
    ]
    process = subprocess.Popen(command, stdin=subprocess.PIPE)
    frame_index = 0
    for slide, duration in zip(slides, durations):
        for frame in range(int(duration * FPS)):
            time_on_slide = frame / FPS
            progress = (frame_index + 1) / frame_count
            process.stdin.write(render(slide, lang, time_on_slide, duration, progress).tobytes())
            frame_index += 1
    process.stdin.close()
    if process.wait() != 0:
        raise RuntimeError(f"ffmpeg could not render video frames for {outpath.name}")


def mux_audio(visual_path: Path, clips: list[tuple[Path, float]], duration: float, outpath: Path) -> None:
    command = ["ffmpeg", "-y", "-loglevel", "error", "-i", str(visual_path), "-stream_loop", "-1", "-i", str(PIANO_TRACK)]
    for clip, _ in clips:
        command.extend(["-i", str(clip)])

    filters = ["[1:a]volume=0.16[music]"]
    mix_labels = ["[music]"]
    for index, (_, start_time) in enumerate(clips):
        delay = int(start_time * 1000)
        input_index = index + 2
        filters.append(f"[{input_index}:a]adelay={delay}|{delay},volume=1.0[voice{index}]")
        mix_labels.append(f"[voice{index}]")
    filters.append(
        "".join(mix_labels)
        + f"amix=inputs={len(mix_labels)}:duration=first:dropout_transition=0:normalize=0,"
        + f"afade=t=out:st={max(0, duration - 2.4):.3f}:d=2.4,alimiter=limit=0.93[audio]"
    )
    command.extend([
        "-filter_complex", ";".join(filters),
        "-map", "0:v:0", "-map", "[audio]",
        "-c:v", "copy", "-c:a", "aac", "-b:a", "160k", "-t", f"{duration:.3f}",
        "-movflags", "+faststart", str(outpath),
    ])
    subprocess.run(command, check=True)


def build(topic: dict, lang: str, outpath: Path, narration: dict) -> float:
    script = narration.get(topic["id"], {}).get(lang)
    if not script:
        raise RuntimeError(f"Missing {lang} narration for {topic['id']} in {NARRATION.name}")
    step_texts = split_for_steps(script, len(topic["steps"]))
    step_clips = [
        narration_path(topic["id"], lang, index, text)
        for index, text in enumerate(step_texts, start=1)
        if text
    ]
    if len(step_clips) != len(topic["steps"]):
        raise RuntimeError(f"Narration for {topic['id']} did not fill every lesson step")

    speech_lengths = [audio_duration(clip) for clip in step_clips]
    write_vtt(outpath.with_suffix(".vtt"), step_texts, speech_lengths)
    step_durations = [max(MIN_STEP_DUR, length + 2.8) for length in speech_lengths]
    slides = make_slides(topic, lang)
    durations = [INTRO_DUR, *step_durations, OUTRO_DUR]
    video_duration = sum(durations)
    voice_clips = []
    elapsed = INTRO_DUR
    for clip, step_duration in zip(step_clips, step_durations):
        voice_clips.append((clip, elapsed + SPEECH_LEAD_IN))
        elapsed += step_duration

    visual_path = outpath.with_name(outpath.stem + ".visual.tmp.mp4")
    render_visual(slides, lang, durations, visual_path)
    try:
        mux_audio(visual_path, voice_clips, video_duration, outpath)
    finally:
        visual_path.unlink(missing_ok=True)
    return video_duration


def main() -> None:
    if not PIANO_TRACK.is_file():
        subprocess.run([sys.executable, str(ROOT / "generate_piano_theme.py")], check=True)
    if not NARRATION.is_file():
        raise RuntimeError(f"Narration file missing: {NARRATION}")
    narration = json.loads(NARRATION.read_text(encoding="utf-8"))

    args = sys.argv[1:]
    langs = LANGS
    if args and args[0] in LANGS:
        langs = [args.pop(0)]
    only = args[0] if args else None
    if only and only not in {topic["id"] for topic in SCENES}:
        raise SystemExit(f"Unknown topic: {only}")

    for lang in langs:
        outdir = OUT_DIR / lang
        outdir.mkdir(parents=True, exist_ok=True)
        for topic in SCENES:
            if only and topic["id"] != only:
                continue
            outpath = outdir / f"{topic['id']}.mp4"
            duration = build(topic, lang, outpath, narration)
            print(f"wrote {outpath.relative_to(ROOT)} ({duration:.0f}s)", flush=True)


if __name__ == "__main__":
    main()
