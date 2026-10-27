FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PORT=8080

WORKDIR /app
COPY index.html styles.css app.js auth.js chess-game.js server.py ./
COPY vendor/ ./vendor/
COPY videos/ ./videos/

EXPOSE 8080
CMD ["python", "server.py"]
