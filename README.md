# atlas

## Getting Started (Docker Only)

### 1. Clone the repository

```bash
git clone https://github.com/Scott170c/atlas.git
cd atlas
```

### 2. Set up environment variables

Copy `.env.example` to `.env` and update as needed.

```bash
cp .env.example .env
```

### 3. Build and run the application with Docker Compose

```bash
docker compose up --build
```

This will build and start all necessary containers for both the backend and frontend.

---

All dependencies and services will be handled by Docker. No local installation of Python, Node.js, or other dependencies is required.
