# Mathematics Mastery

A multilingual math learning app for children and students, with short step-by-step lessons, geometry explanations, explainer videos, browser text-to-speech, quizzes, and a playful progress map. Learners can sign in with AUDELA and generate topic-based practice rounds through an OpenAI-compatible API.

## Features

- **15 math topics** from arithmetic to university-level calculus, in English, Portuguese, and French
- **Geometry lessons** that explain shapes, perimeter as a fence, area as covered space, circles, and triangle angles in small steps
- **Adventure map** with themed learning worlds, cleared quests, a daily side quest with bonus stars, the next recommended stop, and badges; all topics remain open to explore
- **Chess Quest** with a touch-friendly legal-move board, beginner/intermediate/advanced computer play, keyboard navigation, read-aloud rule explanations, four guided opening lines, and saved chess stars
- **AI practice rounds** with five multiple-choice questions, selectable learner style and difficulty, hints, worked explanations, and optional spoken answers
- **AUDELA OIDC sign-in** using server-side authorization-code exchange; the client secret and AI key stay on the server
- **Narrated MP4 explainer videos** with an original piano accompaniment, paced step-by-step explanations, searchable topics, KaTeX formulas, dark mode, and local progress

Progress stars and lesson completion are stored in the learner's browser. AUDELA sign-in is used to protect AI exercise generation; the app does not send the account name or email to the AI provider.

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

The in-memory login session is intended for a single app process/container. Keep one replica unless session storage is moved to a shared store. AUDELA and AI requests fail closed when credentials or services are unavailable; the static lessons remain available.

## Regenerate the videos

```bash
python3 generate_videos.py                        # all languages and topics
python3 generate_videos.py pt                     # Portuguese only
python3 generate_videos.py fr quadratic-equations # one language and topic
```

Requires Python 3, [Pillow](https://pillow.readthedocs.io/), [gTTS](https://gtts.readthedocs.io/), NumPy, and [ffmpeg](https://ffmpeg.org/). Narration generation uses Google text-to-speech and requires internet access. Generating the original piano track also needs libfluidsynth and a General MIDI SoundFont; set `MATH_SOUNDFONT` if it is not at `/usr/share/sounds/sf2/TimGM6mb.sf2`. Speech clips are cached in `.video-cache/` so reruns can reuse them.

## Structure

- `index.html`, `styles.css`, `app.js`, `auth.js`, `chess-game.js` — student experience and browser-side state
- `vendor/chess.js/` — bundled chess.js move rules and its BSD-2-Clause license, so chess works without a separate service
- `server.py` — AUDELA OIDC callback/session and authenticated AI exercise endpoint
- `Dockerfile`, `compose.yaml` — AUDELA Deploy container configuration
- `generate_videos.py`, `video_scenes.py`, `videos/` — generated MP4 lessons
