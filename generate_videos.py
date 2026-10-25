#!/usr/bin/env python3
"""Blackboard math explainer video generator (Pillow + ffmpeg)."""
import subprocess, os, sys
from PIL import Image, ImageDraw, ImageFont
from video_scenes import SCENES

W, H = 1280, 720
FPS = 30
FD = "/usr/share/fonts/truetype/dejavu"
OUT_DIR = "videos"

INTRO_DUR = 2.8
STEP_DUR = 5.6

def font(size, bold=False):
    name = "DejaVuSans-Bold.ttf" if bold else "DejaVuSans.ttf"
    return ImageFont.truetype(os.path.join(FD, name), size)

BG = (19, 25, 22)
CHALK = (238, 240, 232)
DIM = (172, 187, 178)
ACCENT = (255, 214, 90)
LINE = (66, 84, 74)

_noise = Image.effect_noise((W, H), 26).convert("RGB")
_board = Image.blend(Image.new("RGB", (W, H), BG), _noise, 0.045)
_bd = ImageDraw.Draw(_board)
_bd.rectangle([12, 12, W - 13, H - 13], outline=LINE, width=3)

def clamp(x, lo=0.0, hi=1.0):
    return lo if x < lo else hi if x > hi else x

def wrap(text, fnt, maxw):
    lines, cur = [], ""
    for w in text.split():
        t = (cur + " " + w).strip()
        if fnt.getlength(t) <= maxw:
            cur = t
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines

def draw_reveal(d, lines, reveal, fnt, fill, x, y, lh):
    total = sum(len(l) for l in lines)
    target = int(total * clamp(reveal))
    cnt, yy = 0, y
    for l in lines:
        if cnt >= target:
            break
        n = min(len(l), target - cnt)
        d.text((x, yy), l[:n], font=fnt, fill=fill)
        cnt += len(l)
        yy += lh

def draw_centered_reveal(d, text, reveal, fnt, fill, cx, y):
    n = int(len(text) * clamp(reveal))
    d.text((cx, y), text[:n], font=fnt, fill=fill, anchor="mm")

def draw_formula_reveal(d, text, reveal, fnt, fill, cx, y):
    w = fnt.getlength(text)
    n = int(len(text) * clamp(reveal))
    d.text((cx - w / 2, y), text[:n], font=fnt, fill=fill)

def L(v, lang):
    if isinstance(v, dict):
        return v.get(lang, v.get("en", ""))
    return v

def slide_for(topic, lang):
    slides = [{"kind": "intro", "title": L(topic["title"], lang), "sub": L(topic.get("subtitle", ""), lang)}]
    for i, st in enumerate(topic["steps"]):
        slides.append({
            "kind": "step", "num": i + 1, "title": L(st["title"], lang),
            "body": wrap(L(st.get("body", ""), lang), font(30), W - 220),
            "formulas": L(st.get("formulas", []), lang),
        })
    return slides

def render(slide, t):
    img = _board.copy()
    d = ImageDraw.Draw(img)
    d.text((W - 40, H - 40), "Mathematics Mastery", font=font(20), fill=DIM, anchor="rb")

    if slide["kind"] == "intro":
        d.text((W / 2, 140), "M A T H E M A T I C S   M A S T E R Y", font=font(24), fill=DIM, anchor="mm")
        draw_centered_reveal(d, slide["title"], t / 1.4, font(74, True), CHALK, W / 2, 300)
        w = font(74, True).getlength(slide["title"]) * clamp(t / 1.4)
        d.line([W / 2 - w / 2, 368, W / 2 + w / 2, 368], fill=ACCENT, width=3)
        if t > 0.9:
            draw_centered_reveal(d, slide["sub"], (t - 0.9) / 1.1, font(30), DIM, W / 2, 440)
    else:
        label = f"STEP {slide['num']}"
        lw = font(24, True).getlength(label) + 36
        d.rounded_rectangle([80, 62, 80 + lw, 62 + 46], radius=10, outline=ACCENT, width=2)
        d.text((98, 85), label, font=font(24, True), fill=ACCENT, anchor="lm")
        draw_reveal(d, [slide["title"]], t / 0.7, font(46, True), CHALK, 82, 138, 60)
        draw_reveal(d, slide["body"], (t - 0.4) / 1.8, font(30), DIM, 82, 218, 44)
        f_rev = (t - 1.5) / 1.6
        fy = 400
        for f in slide["formulas"]:
            if f_rev > 0:
                draw_formula_reveal(d, f, f_rev, font(46, True), ACCENT, W / 2, fy)
            fy += 76
    return img

def build(topic, lang, outpath):
    slides = slide_for(topic, lang)
    total = int(INTRO_DUR * FPS) + len(topic["steps"]) * int(STEP_DUR * FPS)
    cmd = [
        "ffmpeg", "-y", "-loglevel", "error",
        "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}", "-r", str(FPS), "-i", "-",
        "-c:v", "libx264", "-preset", "medium", "-crf", "21", "-pix_fmt", "yuv420p",
        "-movflags", "+faststart", outpath,
    ]
    proc = subprocess.Popen(cmd, stdin=subprocess.PIPE)
    for s in slides:
        dur = INTRO_DUR if s["kind"] == "intro" else STEP_DUR
        for k in range(int(dur * FPS)):
            proc.stdin.write(render(s, k / FPS).tobytes())
    proc.stdin.close()
    proc.wait()

LANGS = ["en", "pt", "fr"]

if __name__ == "__main__":
    os.makedirs(OUT_DIR, exist_ok=True)
    args = sys.argv[1:]
    only = None
    langs = LANGS
    if args and args[0] in LANGS:
        langs = [args[0]]
        args = args[1:]
    if args:
        only = args[0]
    for lang in langs:
        outdir = os.path.join(OUT_DIR, lang)
        os.makedirs(outdir, exist_ok=True)
        for topic in SCENES:
            if only and topic["id"] != only:
                continue
            outpath = os.path.join(outdir, topic["id"] + ".mp4")
            build(topic, lang, outpath)
            print("wrote", outpath)
