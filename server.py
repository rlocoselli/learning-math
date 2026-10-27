"""Small same-origin web server for the math app, AUDELA sign-in and AI practice."""

from __future__ import annotations

import base64
import hashlib
import hmac
import json
import os
import secrets
import threading
import time
from collections import defaultdict, deque
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode, urljoin, urlsplit
from urllib.request import HTTPRedirectHandler, Request, build_opener


ROOT = Path(__file__).resolve().parent
ISSUER = os.environ.get("AUDELA_OIDC_ISSUER", "https://www.audeladedonnees.fr").rstrip("/")
CLIENT_ID = os.environ.get("AUDELA_OIDC_CLIENT_ID", "").strip()
CLIENT_SECRET = os.environ.get("AUDELA_OIDC_CLIENT_SECRET", "").strip()
REDIRECT_URI = os.environ.get("AUDELA_OIDC_REDIRECT_URI", "").strip()
SESSION_SECRET = os.environ.get("APP_SESSION_SECRET", "")
AI_BASE_URL = os.environ.get("AI_API_BASE_URL", "https://api.openai.com/v1").rstrip("/")
AI_API_KEY = os.environ.get("AI_API_KEY", "").strip()
AI_MODEL = os.environ.get("AI_MODEL", "").strip()
COOKIE_SECURE = os.environ.get("COOKIE_SECURE", "false").lower() in {"1", "true", "yes", "on"}
PORT = int(os.environ.get("PORT", "8080"))

def _valid_callback_uri(url: str) -> bool:
    parsed = urlsplit(url)
    if parsed.path != "/auth/callback" or not parsed.hostname or parsed.username or parsed.password or parsed.query or parsed.fragment:
        return False
    if parsed.scheme == "https":
        return True
    return parsed.scheme == "http" and parsed.hostname in {"localhost", "127.0.0.1", "::1"}


OIDC_AUTH_ENABLED = bool(CLIENT_ID and CLIENT_SECRET and _valid_callback_uri(REDIRECT_URI) and len(SESSION_SECRET) >= 32)
AI_ENABLED = bool(AI_API_KEY and AI_MODEL)

TOPICS = {
    "arithmetic": "Basic arithmetic",
    "fractions": "Fractions",
    "percentages-ratios": "Percentages and ratios",
    "statistics-data": "Mean, median, mode and range",
    "geometry-basics": "Shapes, perimeter, area and angles",
    "linear-equations": "Linear equations",
    "quadratic-equations": "Quadratic equations",
    "functions": "Functions",
    "trigonometry": "Trigonometry",
    "exponents-logarithms": "Exponents and logarithms",
    "limits-continuity": "Limits and continuity",
    "derivatives-chain-rule": "Derivatives and the chain rule",
    "integration-definite": "Definite integrals",
    "linear-algebra-matrices": "Linear algebra and matrices",
    "probability-normal": "Probability and normal distributions",
}
LANGUAGES = {"en": "English", "pt": "Portuguese", "fr": "French"}
DIFFICULTIES = {
    "gentle": "gentle, with small numbers and one familiar idea",
    "steady": "steady practice that combines one or two ideas",
    "challenge": "a thoughtful challenge appropriate to the selected topic and learner style",
}

_sessions: dict[str, tuple[str, int]] = {}
_session_lock = threading.Lock()
_requests_by_subject: dict[str, deque[float]] = defaultdict(deque)
_rate_lock = threading.Lock()
_oidc_metadata: dict | None = None
_oidc_metadata_expires = 0.0
_metadata_lock = threading.Lock()


class _NoRedirect(HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None


_http = build_opener(_NoRedirect())


def _json_bytes(value: object) -> bytes:
    return json.dumps(value, ensure_ascii=False, separators=(",", ":")).encode("utf-8")


def _fetch_json(url: str, *, headers: dict[str, str] | None = None, data: bytes | None = None, timeout: int = 8) -> dict:
    request = Request(url, data=data, headers=headers or {}, method="POST" if data is not None else "GET")
    with _http.open(request, timeout=timeout) as response:
        if response.status < 200 or response.status >= 300:
            raise ValueError("The service returned an unsuccessful response")
        parsed = json.loads(response.read(1_000_000).decode("utf-8"))
        if not isinstance(parsed, dict):
            raise ValueError("The service returned an invalid response")
        return parsed


def _trusted_endpoint(url: str) -> str:
    parsed = urlsplit(url)
    issuer = urlsplit(ISSUER)
    if parsed.scheme != "https" or parsed.hostname != issuer.hostname or not parsed.path.startswith("/"):
        raise ValueError("The AUDELA endpoint is not trusted")
    return url


def _get_oidc_metadata() -> dict:
    global _oidc_metadata, _oidc_metadata_expires
    with _metadata_lock:
        if _oidc_metadata and _oidc_metadata_expires > time.time():
            return _oidc_metadata
        issuer = urlsplit(ISSUER)
        if issuer.scheme != "https" or issuer.hostname not in {"www.audeladedonnees.fr", "audeladedonnees.fr"}:
            raise ValueError("The AUDELA issuer is not trusted")
        discovery_url = f"{ISSUER}/app/.well-known/openid-configuration"
        metadata = _fetch_json(discovery_url)
        if metadata.get("issuer", "").rstrip("/") != ISSUER:
            raise ValueError("The issuer did not match AUDELA discovery")
        for key in ("authorization_endpoint", "token_endpoint", "userinfo_endpoint"):
            metadata[key] = _trusted_endpoint(str(metadata.get(key, "")))
        _oidc_metadata = metadata
        _oidc_metadata_expires = time.time() + 900
        return metadata


def _cookies(handler: SimpleHTTPRequestHandler) -> dict[str, str]:
    values: dict[str, str] = {}
    for part in (handler.headers.get("Cookie") or "").split(";"):
        name, separator, value = part.strip().partition("=")
        if separator:
            values[name] = value
    return values


def _set_cookie(handler: SimpleHTTPRequestHandler, name: str, value: str, max_age: int) -> None:
    secure = "; Secure" if COOKIE_SECURE else ""
    handler.send_header("Set-Cookie", f"{name}={value}; Path=/; Max-Age={max_age}; HttpOnly; SameSite=Lax{secure}")


def _make_session_cookie(subject: str, expires_in: int) -> str:
    session_id = secrets.token_urlsafe(32)
    signature = hmac.new(SESSION_SECRET.encode(), session_id.encode(), hashlib.sha256).digest()
    token = base64.urlsafe_b64encode(signature).decode().rstrip("=")
    expiry = int(time.time()) + min(max(expires_in, 60), 3600)
    with _session_lock:
        now = int(time.time())
        for stale in [key for key, (_, exp) in _sessions.items() if exp <= now]:
            _sessions.pop(stale, None)
        _sessions[session_id] = (subject, expiry)
    return f"{session_id}.{token}"


def _session_subject(handler: SimpleHTTPRequestHandler) -> str | None:
    value = _cookies(handler).get("math_session", "")
    session_id, separator, signature = value.partition(".")
    if not separator or not session_id or not SESSION_SECRET:
        return None
    expected_raw = hmac.new(SESSION_SECRET.encode(), session_id.encode(), hashlib.sha256).digest()
    expected = base64.urlsafe_b64encode(expected_raw).decode().rstrip("=")
    if not hmac.compare_digest(signature, expected):
        return None
    with _session_lock:
        session = _sessions.get(session_id)
        if not session or session[1] <= int(time.time()):
            _sessions.pop(session_id, None)
            return None
        return session[0]


def _ai_request(topic: str, language: str, mode: str, difficulty: str) -> list[dict]:
    language_name = LANGUAGES[language]
    age_guidance = (
        "Use a warm, reassuring, child-friendly voice. Use everyday examples, short sentences and small steps. "
        "Avoid scary, romantic, violent, political, or adult themes. Never ask for a learner's name, age, school, location, or contact details."
        if mode == "young"
        else "Use a clear student study-guide voice, accurate mathematical language, and a concise worked explanation. Keep contexts school-safe."
    )
    system = (
        "You are a careful mathematics tutor. Create exactly five original multiple-choice math exercises. "
        "Check every question by solving it before you answer. Each question must have exactly four distinct options and exactly one correct option. "
        "Return only a JSON object with an 'exercises' array. Each item must contain: question (string), options (array of four strings), "
        "correctIndex (integer 0 to 3), hint (string), explanation (string), and steps (array of 1 to 5 short strings). "
        "Do not reveal the correct answer in the question or hint. Use clear units and correct notation. " + age_guidance
    )
    prompt = (
        f"Create the exercises in {language_name}. Topic: {topic}. Difficulty: {DIFFICULTIES[difficulty]}. "
        "Vary the numbers and contexts. Keep each question focused on this topic."
    )
    payload = {
        "model": AI_MODEL,
        "temperature": 0.45,
        "response_format": {"type": "json_object"},
        "messages": [
            {"role": "system", "content": system},
            {"role": "user", "content": prompt},
        ],
    }
    def send_request(request_payload: dict) -> dict:
        request = Request(
            f"{AI_BASE_URL}/chat/completions",
            data=_json_bytes(request_payload),
            headers={"Authorization": f"Bearer {AI_API_KEY}", "Content-Type": "application/json"},
            method="POST",
        )
        with _http.open(request, timeout=50) as response:
            parsed = json.loads(response.read(1_000_000).decode("utf-8"))
        if not isinstance(parsed, dict):
            raise ValueError("The AI service returned an invalid response")
        return parsed

    try:
        result = send_request(payload)
    except HTTPError as error:
        if error.code not in {400, 422}:
            raise
        error.close()
        payload.pop("response_format", None)
        result = send_request(payload)
    raw = result["choices"][0]["message"]["content"]
    if isinstance(raw, list):
        raw = "".join(part.get("text", "") for part in raw if isinstance(part, dict))
    if isinstance(raw, str) and raw.strip().startswith("```"):
        raw = raw.strip().removeprefix("```json").removeprefix("```").removesuffix("```").strip()
    generated = json.loads(raw)
    items = generated.get("exercises") if isinstance(generated, dict) else None
    if not isinstance(items, list) or len(items) != 5:
        raise ValueError("The model returned an incomplete exercise round")

    cleaned: list[dict] = []
    for item in items:
        if not isinstance(item, dict):
            raise ValueError("The model returned an invalid exercise")
        question = _bounded_text(item.get("question"), 500)
        hint = _bounded_text(item.get("hint"), 400)
        explanation = _bounded_text(item.get("explanation"), 700)
        options = item.get("options")
        correct = item.get("correctIndex")
        steps = item.get("steps")
        if not isinstance(options, list) or len(options) != 4:
            raise ValueError("The model returned invalid answer choices")
        safe_options = [_bounded_text(option, 180) for option in options]
        if len({option.casefold() for option in safe_options}) != 4 or type(correct) is not int or not 0 <= correct < 4:
            raise ValueError("The model returned an invalid answer key")
        if not isinstance(steps, list) or not 1 <= len(steps) <= 5:
            raise ValueError("The model returned invalid solution steps")
        cleaned.append({
            "question": question,
            "options": safe_options,
            "correctIndex": correct,
            "hint": hint,
            "explanation": explanation,
            "steps": [_bounded_text(step, 300) for step in steps],
        })
    return cleaned


def _bounded_text(value: object, limit: int) -> str:
    if not isinstance(value, str):
        raise ValueError("The model returned invalid text")
    text = value.strip()
    if not text or len(text) > limit:
        raise ValueError("The model returned text outside the allowed length")
    return text


class MathHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def log_message(self, format: str, *args) -> None:
        # Avoid logging authorization codes, cookies, tokens, or learner activity.
        return

    def end_headers(self) -> None:
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Referrer-Policy", "strict-origin-when-cross-origin")
        self.send_header("Cache-Control", "no-store" if self.path.startswith(("/api/", "/auth/")) else "no-cache")
        super().end_headers()

    def _send_json(self, payload: dict, status: int = 200) -> None:
        body = _json_bytes(payload)
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _send_text(self, message: str, status: int = 400) -> None:
        body = message.encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "text/plain; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _is_local_callback(self, url: str) -> bool:
        return _valid_callback_uri(url)

    def do_GET(self) -> None:
        path = urlsplit(self.path).path
        if path == "/api/config":
            return self._send_json({"loginConfigured": OIDC_AUTH_ENABLED, "aiConfigured": AI_ENABLED})
        if path == "/api/session":
            authenticated = _session_subject(self) is not None
            return self._send_json({"authenticated": authenticated, "loginConfigured": OIDC_AUTH_ENABLED})
        if path == "/auth/login":
            if not OIDC_AUTH_ENABLED or not self._is_local_callback(REDIRECT_URI):
                return self._send_text("AUDELA login is not configured for this app.", HTTPStatus.SERVICE_UNAVAILABLE)
            try:
                metadata = _get_oidc_metadata()
            except (HTTPError, URLError, ValueError, TimeoutError, json.JSONDecodeError):
                return self._send_text("Could not reach the AUDELA login service.", HTTPStatus.BAD_GATEWAY)
            state = secrets.token_urlsafe(32)
            query = urlencode({
                "client_id": CLIENT_ID,
                "redirect_uri": REDIRECT_URI,
                "response_type": "code",
                "scope": "openid profile email",
                "state": state,
            })
            target = metadata["authorization_endpoint"] + "?" + query
            self.send_response(HTTPStatus.SEE_OTHER)
            self.send_header("Location", target)
            _set_cookie(self, "math_oidc_state", state, 300)
            self.end_headers()
            return
        if path == "/auth/callback":
            return self._handle_oidc_callback()
        return super().do_GET()

    def _handle_oidc_callback(self) -> None:
        if not OIDC_AUTH_ENABLED:
            return self._send_text("AUDELA login is not configured for this app.", HTTPStatus.SERVICE_UNAVAILABLE)
        from urllib.parse import parse_qs

        query = parse_qs(urlsplit(self.path).query)
        code = (query.get("code") or [""])[0]
        state = (query.get("state") or [""])[0]
        expected_state = _cookies(self).get("math_oidc_state", "")
        if not code or not state or not expected_state or not hmac.compare_digest(state, expected_state):
            return self._redirect_with_error("login")
        try:
            metadata = _get_oidc_metadata()
            credentials = base64.b64encode(f"{CLIENT_ID}:{CLIENT_SECRET}".encode()).decode()
            form = urlencode({"grant_type": "authorization_code", "code": code, "redirect_uri": REDIRECT_URI}).encode()
            token_data = _fetch_json(metadata["token_endpoint"], data=form, headers={
                "Authorization": f"Basic {credentials}",
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json",
            })
            access_token = token_data.get("access_token")
            if not isinstance(access_token, str) or not access_token:
                raise ValueError("The token service did not return an access token")
            profile = _fetch_json(metadata["userinfo_endpoint"], headers={
                "Authorization": f"Bearer {access_token}",
                "Accept": "application/json",
            })
            subject = profile.get("sub")
            if not isinstance(subject, str) or not subject or len(subject) > 200:
                raise ValueError("The user-info service did not return a valid subject")
            expires_in = token_data.get("expires_in", 3600)
            if type(expires_in) is not int:
                expires_in = 3600
            cookie = _make_session_cookie(subject, expires_in)
        except (HTTPError, URLError, ValueError, TimeoutError, KeyError, json.JSONDecodeError):
            return self._redirect_with_error("login")

        session_ttl = min(max(expires_in, 60), 3600)
        self.send_response(HTTPStatus.SEE_OTHER)
        self.send_header("Location", "/")
        _set_cookie(self, "math_session", cookie, session_ttl)
        _set_cookie(self, "math_oidc_state", "", 0)
        self.end_headers()

    def _redirect_with_error(self, kind: str) -> None:
        self.send_response(HTTPStatus.SEE_OTHER)
        self.send_header("Location", f"/?{kind}=error")
        _set_cookie(self, "math_oidc_state", "", 0)
        self.end_headers()

    def do_POST(self) -> None:
        path = urlsplit(self.path).path
        if path == "/auth/logout":
            value = _cookies(self).get("math_session", "")
            session_id = value.partition(".")[0]
            with _session_lock:
                _sessions.pop(session_id, None)
            self.send_response(HTTPStatus.OK)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            _set_cookie(self, "math_session", "", 0)
            self.end_headers()
            self.wfile.write(_json_bytes({"ok": True}))
            return
        if path != "/api/exercises":
            return self._send_text("Not found", HTTPStatus.NOT_FOUND)
        subject = _session_subject(self)
        if not subject:
            return self._send_json({"error": "sign_in_required"}, HTTPStatus.UNAUTHORIZED)
        if not AI_ENABLED:
            return self._send_json({"error": "ai_not_configured"}, HTTPStatus.SERVICE_UNAVAILABLE)
        try:
            length = int(self.headers.get("Content-Length", "0"))
            if length <= 0 or length > 4096:
                return self._send_json({"error": "invalid_request"}, HTTPStatus.BAD_REQUEST)
            body = json.loads(self.rfile.read(length))
            if not isinstance(body, dict):
                raise ValueError("invalid body")
            topic_id = body.get("topicId")
            language = body.get("language")
            mode = body.get("mode")
            difficulty = body.get("difficulty")
            if topic_id not in TOPICS or language not in LANGUAGES or mode not in {"young", "student"} or difficulty not in DIFFICULTIES:
                return self._send_json({"error": "invalid_request"}, HTTPStatus.BAD_REQUEST)
        except (ValueError, TypeError, json.JSONDecodeError):
            return self._send_json({"error": "invalid_request"}, HTTPStatus.BAD_REQUEST)

        now = time.time()
        with _rate_lock:
            bucket = _requests_by_subject[subject]
            while bucket and bucket[0] < now - 3600:
                bucket.popleft()
            if len(bucket) >= 12:
                return self._send_json({"error": "rate_limited"}, HTTPStatus.TOO_MANY_REQUESTS)
            bucket.append(now)
        try:
            questions = _ai_request(TOPICS[topic_id], language, mode, difficulty)
        except Exception:
            return self._send_json({"error": "generation_failed"}, HTTPStatus.BAD_GATEWAY)
        return self._send_json({"topicId": topic_id, "exercises": questions})


if __name__ == "__main__":
    server = ThreadingHTTPServer(("0.0.0.0", PORT), MathHandler)
    print(f"Math app listening on http://0.0.0.0:{PORT}")
    server.serve_forever()
