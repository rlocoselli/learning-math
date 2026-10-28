# Learning Studio

A multilingual learning site for children and students, organized into separate Math, Chess, and Brain IQ pages with a shared menu. It includes short step-by-step math lessons, geometry explanations, explainer videos, browser text-to-speech, quizzes, friendly chess games, brain mini-games, and playful progress maps. Learners can sign in with AUDELA on the Math page and generate topic-based practice rounds through an OpenAI-compatible API.

Open `/` or `index.html` for Math, `chess.html` for Chess, and `brain.html` for Brain IQ. The shared top menu moves between all three areas.

## Features

- **15 math topics** from arithmetic to university-level calculus, in English, Portuguese, and French
- **Geometry lessons** that explain shapes, perimeter as a fence, area as covered space, circles, and triangle angles in small steps
- **Adventure map** with themed learning worlds, cleared quests, a daily side quest with bonus stars, the next recommended stop, and badges; all topics remain open to explore
- **Chess Quest** with a touch-friendly legal-move board, beginner/intermediate/advanced computer play, keyboard navigation, read-aloud rule explanations, four guided opening lines, and saved chess stars
- **Brain Games** with seven short number, pattern, memory, focus, symbol, rule-switching, and logic rounds; a daily mixed check with a timer, streak, and playful score; friendly explanations, read-aloud tips, and saved progress
- **Separate learning areas** for Math, Chess, and Brain IQ, with a shared responsive menu, page-specific introductions, and consistent language and theme controls
- **AI practice rounds** with five multiple-choice questions, selectable learner style and difficulty, hints, worked explanations, and optional spoken answers
- **AUDELA OIDC sign-in** using server-side authorization-code exchange; the client secret and AI key stay on the server
- **Narrated MP4 explainer videos** with an original piano accompaniment, paced step-by-step explanations, searchable topics, KaTeX formulas, dark mode, and local progress

Progress remains available in the learner's browser and, when signed in, is merged into a SQLite account record so it follows the learner across devices. AUDELA sign-in also protects AI exercise generation; the app does not send the account name or email to the AI provider. AI answer keys receive an independent second model check; rounds with disagreeing answers are rejected, but automated checks cannot guarantee every mathematical explanation is correct.

## Run locally

```bash
PORT=8000 COOKIE_SECURE=false python3 server.py
# open http://localhost:8000
```

Without credentials, lessons, videos, and the adventure map work normally. To test local OIDC, use the exact callback `http://localhost:8000/auth/callback` in AUDELA and provide the environment variables below. For local work, create a random session secret with `openssl rand -hex 32`.

## Deploy with AUDELA Deploy

Deploy this repository as a Docker/Compose project. The web service listens on container port **8080**; configure the Deploy web ingress to that port and terminate HTTPS at the ingress. The Compose file sets secure cookies for production.

Set the following environment variables in the deployment's secret/environment settings. Do not commit a `.env` file or paste secret values into source control.

| Variable | Value |
| --- | --- |
| `AUDELA_OIDC_ISSUER` | `https://www.audeladedonnees.fr` |
| `AUDELA_OIDC_CLIENT_ID` | The client ID supplied for this app by AUDELA Deploy |
| `AUDELA_OIDC_CLIENT_SECRET` | The matching AUDELA client secret |
| `AUDELA_OIDC_REDIRECT_URI` | Exact public URL plus `/auth/callback`, such as `https://math.example.org/auth/callback` |
| `APP_SESSION_SECRET` | Random secret of at least 32 characters; generate with `openssl rand -hex 32` |
| `AI_API_BASE_URL` | OpenAI-compatible API base, default `https://api.openai.com/v1` |
| `AI_API_KEY` | API key for the selected compatible service |
| `AI_MODEL` | A model available on that service |

Register the exact deployed callback URL in AUDELA Deploy. The app discovers the AUDELA authorization, token, and user-info endpoints from `https://www.audeladedonnees.fr/app/.well-known/openid-configuration`. It uses the `openid profile email` scopes and the authorization-code flow. The client secret is used only for the server-side token exchange.

AUDELA Deploy generates per-app OIDC client IDs and secrets. The provider accepts those app credentials and checks the redirect URL against that app's registered OIDC callback list. See `docs/AUDELA_OIDC.md` in the AUDELA Flask project for provider details.

The in-memory login session is intended for a single app process/container. Keep one replica unless session storage is moved to a shared store. Account progress is stored in the `math_progress` Compose volume (or `PROGRESS_DB` path). Back up that volume to retain progress across deployment moves. AUDELA and AI requests fail closed when credentials or services are unavailable; the static lessons remain available.

## Regenerate the videos

```bash
python3 generate_videos.py                        # all languages and topics
python3 generate_videos.py pt                     # Portuguese only
python3 generate_videos.py fr quadratic-equations # one language and topic
python3 captions.py                             # refresh captions from cached narration
```

Requires Python 3, [Pillow](https://pillow.readthedocs.io/), [gTTS](https://gtts.readthedocs.io/), NumPy, and [ffmpeg](https://ffmpeg.org/). Narration generation uses Google text-to-speech and requires internet access. Generating the original piano track also needs libfluidsynth and a General MIDI SoundFont; set `MATH_SOUNDFONT` if it is not at `/usr/share/sounds/sf2/TimGM6mb.sf2`. Speech clips are cached in `.video-cache/` so reruns can reuse them.

## Structure

- `index.html`, `chess.html`, `brain.html`, `styles.css`, `app.js`, `site-shell.js`, `auth.js`, `chess-game.js`, `brain-games.js` — student experience and browser-side state
- `vendor/chess.js/` — bundled chess.js move rules and its BSD-2-Clause license, so chess works without a separate service
- `server.py` — AUDELA OIDC callback/session and authenticated AI exercise endpoint
- `Dockerfile`, `compose.yaml` — AUDELA Deploy container configuration
- `generate_videos.py`, `captions.py`, `video_scenes.py`, `videos/` — generated MP4 lessons and synchronized WebVTT captions
- `test_server.py` — focused public asset and progress API checks (`python3 -m unittest test_server.py`)
