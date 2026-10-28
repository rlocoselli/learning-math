"""Focused HTTP checks for public assets and signed-in progress."""

import json
import io
import tempfile
import threading
import unittest
from email.message import Message
from http.server import ThreadingHTTPServer
from pathlib import Path
from types import SimpleNamespace
from unittest.mock import patch
from urllib.error import HTTPError
from urllib.request import Request, urlopen

import server


class ServerTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.httpd = ThreadingHTTPServer(("127.0.0.1", 0), server.MathHandler)
        cls.thread = threading.Thread(target=cls.httpd.serve_forever, daemon=True)
        cls.thread.start()
        cls.base = f"http://127.0.0.1:{cls.httpd.server_port}"

    @classmethod
    def tearDownClass(cls):
        cls.httpd.shutdown()
        cls.httpd.server_close()
        cls.thread.join()

    def request(self, path, *, method="GET", data=None):
        body = json.dumps(data).encode() if data is not None else None
        request = Request(self.base + path, data=body, method=method)
        if body is not None:
            request.add_header("Content-Type", "application/json")
        try:
            with urlopen(request) as response:
                return response.status, response.read()
        except HTTPError as error:
            return error.code, error.read()

    def test_only_public_files_are_served(self):
        for path in ("/", "/index.html", "/app.js", "/videos/en/arithmetic.mp4", "/videos/en/arithmetic.vtt"):
            with self.subTest(path=path):
                self.assertEqual(self.request(path)[0], 200)
        for path in ("/server.py", "/compose.yaml", "/video_narration.json", "/.git/config", "/%73erver.py", "/videos/en/../server.py"):
            with self.subTest(path=path):
                self.assertEqual(self.request(path)[0], 404)
                self.assertEqual(self.request(path, method="HEAD")[0], 404)

    def test_progress_requires_login(self):
        self.assertEqual(self.request("/api/progress")[0], 401)
        self.assertEqual(self.request("/api/progress", method="POST", data={})[0], 401)

    def test_session_cookie_is_signed_and_expires(self):
        with patch.object(server, "SESSION_SECRET", "x" * 32):
            cookie = server._make_session_cookie("student-1", 60)
            headers = Message()
            headers["Cookie"] = f"math_session={cookie}"
            handler = SimpleNamespace(headers=headers)
            self.assertEqual(server._session_subject(handler), "student-1")
            bad_character = "A" if cookie[-1] != "A" else "B"
            headers.replace_header("Cookie", f"math_session={cookie[:-1]}{bad_character}")
            self.assertIsNone(server._session_subject(handler))
            with server._session_lock:
                server._sessions[cookie.split(".")[0]] = ("student-1", 0)
            headers.replace_header("Cookie", f"math_session={cookie}")
            self.assertIsNone(server._session_subject(handler))

    def test_progress_merges_completed_work(self):
        with tempfile.TemporaryDirectory() as directory, patch.object(server, "PROGRESS_DB", Path(directory) / "progress.sqlite3"), patch.object(server, "_session_subject", return_value="test-user"):
            first = {"arithmetic": {"lesson": True, "quiz": 60, "lessonRewarded": True}, "_points": 20}
            second = {"arithmetic": {"quiz": 90}, "fractions": {"practice": True, "practiceRewarded": True}, "_points": 15}
            self.assertEqual(self.request("/api/progress", method="POST", data=first)[0], 200)
            status, body = self.request("/api/progress", method="POST", data=second)
            self.assertEqual(status, 200)
            merged = json.loads(body)["progress"]
            self.assertTrue(merged["arithmetic"]["lesson"])
            self.assertEqual(merged["arithmetic"]["quiz"], 90)
            self.assertTrue(merged["fractions"]["practice"])
            self.assertEqual(merged["_points"], 35)
            self.assertEqual(json.loads(self.request("/api/progress")[1])["progress"], merged)
            self.assertEqual(self.request("/api/progress", method="POST", data={"arithmetic": {"quiz": 101}})[0], 400)

    def test_ai_answer_check_rejects_disagreement(self):
        exercises = [{
            "question": f"What is {index} + 1?", "options": [str(index + 1), str(index + 2), str(index + 3), str(index + 4)],
            "correctIndex": 0, "hint": "Add one.", "explanation": f"The answer is {index + 1}.", "steps": ["Add one."],
        } for index in range(5)]

        class FakeResponse(io.BytesIO):
            status = 200

            def __enter__(self):
                return self

            def __exit__(self, *_):
                self.close()

        def responses(indices):
            payloads = [
                {"choices": [{"message": {"content": json.dumps({"exercises": exercises})}}]},
                {"choices": [{"message": {"content": json.dumps({"indices": indices})}}]},
            ]
            return iter(FakeResponse(json.dumps(payload).encode()) for payload in payloads)

        with patch.object(server, "AI_MODEL", "test-model"), patch.object(server, "AI_API_KEY", "test-key"):
            accepted = responses([0] * 5)
            with patch.object(server._http, "open", side_effect=lambda *_args, **_kwargs: next(accepted)):
                self.assertEqual(len(server._ai_request("Basic arithmetic", "en", "young", "gentle")), 5)
            rejected = responses([1, 0, 0, 0, 0])
            with patch.object(server._http, "open", side_effect=lambda *_args, **_kwargs: next(rejected)):
                with self.assertRaisesRegex(ValueError, "verification"):
                    server._ai_request("Basic arithmetic", "en", "young", "gentle")


if __name__ == "__main__":
    unittest.main()
