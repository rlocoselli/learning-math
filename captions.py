"""Timed WebVTT captions for the existing narrated lesson videos."""

from __future__ import annotations

import hashlib
import json
import re
import subprocess
from pathlib import Path

from video_scenes import SCENES

ROOT = Path(__file__).resolve().parent
INTRO_DUR = 3.8
MIN_STEP_DUR = 9.2
SPEECH_LEAD_IN = 0.65


def split_for_steps(text: str, count: int) -> list[str]:
    sentences = [part.strip() for part in re.split(r"(?<=[.!?])\s+", text.strip()) if part.strip()]
    return [" ".join(sentences[round(i * len(sentences) / count):round((i + 1) * len(sentences) / count)]) for i in range(count)]


def chunks(text: str, width: int = 85) -> list[str]:
    words = text.split()
    result, current = [], ""
    for word in words:
        if current and len(current) + len(word) + 1 > width:
            result.append(current)
            current = word
        else:
            current = f"{current} {word}".strip()
    if current:
        result.append(current)
    return result


def stamp(seconds: float) -> str:
    milliseconds = round(seconds * 1000)
    hours, remainder = divmod(milliseconds, 3_600_000)
    minutes, remainder = divmod(remainder, 60_000)
    secs, millis = divmod(remainder, 1000)
    return f"{hours:02d}:{minutes:02d}:{secs:02d}.{millis:03d}"


def write_vtt(path: Path, texts: list[str], speech_lengths: list[float]) -> None:
    lines = ["WEBVTT", ""]
    elapsed = INTRO_DUR
    for text, speech_length in zip(texts, speech_lengths):
        parts = chunks(text)
        if parts:
            weights = [len(part) for part in parts]
            total = sum(weights)
            cursor = elapsed + SPEECH_LEAD_IN
            for part, weight in zip(parts, weights):
                end = cursor + speech_length * weight / total
                lines.extend([f"{stamp(cursor)} --> {stamp(end)}", part, ""])
                cursor = end
        elapsed += max(MIN_STEP_DUR, speech_length + 2.8)
    path.write_text("\n".join(lines), encoding="utf-8")


def duration(path: Path) -> float:
    result = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", str(path)], capture_output=True, text=True, check=True)
    return float(result.stdout.strip())


def write_existing_captions() -> None:
    narration = json.loads((ROOT / "video_narration.json").read_text(encoding="utf-8"))
    for topic in SCENES:
        for language in ("en", "pt", "fr"):
            texts = split_for_steps(narration[topic["id"]][language], len(topic["steps"]))
            lengths = []
            for index, text in enumerate(texts, 1):
                digest = hashlib.sha256(text.encode("utf-8")).hexdigest()[:12]
                clip = ROOT / ".video-cache" / "narration" / language / topic["id"] / f"step-{index:02d}-{digest}.mp3"
                if not clip.is_file():
                    raise FileNotFoundError(f"Missing cached narration: {clip}")
                lengths.append(duration(clip))
            write_vtt(ROOT / "videos" / language / f"{topic['id']}.vtt", texts, lengths)


if __name__ == "__main__":
    write_existing_captions()
