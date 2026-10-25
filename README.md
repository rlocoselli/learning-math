# Mathematics Mastery

A free, multilingual (English · Português · Français) math learning web app with step-by-step lessons, interactive quizzes, and blackboard-style explainer videos — from basic arithmetic to university-level calculus.

## Features

- **13 math topics** (Beginner → Intermediate → Advanced)
- **KaTeX** rendering for proper mathematical notation
- **Interactive quizzes** with instant feedback and saved progress
- **Step-by-step lesson player** (video-style walkthrough with play/pause)
- **Blackboard-style MP4 explainer videos** in 3 languages
- **Light / dark mode** and full i18n (EN / PT / FR)

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Regenerate the videos

```bash
python3 generate_videos.py              # all languages & topics
python3 generate_videos.py pt           # Portuguese only
python3 generate_videos.py fr quadratic-equations   # one language + one topic
```

Requires Python 3, [Pillow](https://pillow.readthedocs.io/) and [ffmpeg](https://ffmpeg.org/).

## Structure

- `index.html`, `styles.css`, `app.js` — the app
- `generate_videos.py`, `video_scenes.py` — blackboard video generator
- `videos/{en,pt,fr}/` — generated MP4 lessons (13 topics × 3 languages)
