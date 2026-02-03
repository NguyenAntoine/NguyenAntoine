# Portfolio Antoine Nguyen

Static portfolio website built with Hugo and deployed with Docker.

> Portefeuille de compétences pour mon parcours scolaire et professionnel

---

## Local Development

### Prerequisites
- Hugo (install from [hugo.io](https://gohugo.io/installation/))

### Development Server

```bash
# Launch local server with hot reload
hugo serve --disableFastRender

# Access at http://localhost:1313
```

### Build Static Site

```bash
# Build site into public/ directory
hugo

# Output is in public/ folder
```

---

## Docker Deployment

### Quick Start

1. **Create environment file:**
```bash
cp .env.dist .env
```

2. **Edit `.env` with your domain:**
```bash
VIRTUAL_HOST=yourportfolio.com
LETSENCRYPT_HOST=yourportfolio.com
LETSENCRYPT_EMAIL=your-email@example.com
```

3. **Build and deploy:**
```bash
./docker-run.sh
```

Or manually:
```bash
docker compose build
docker compose up -d
```

### Access

- Open `https://yourportfolio.com`
- DNS must point to your server

---

## Docker Configuration

Uses nginx behind reverse proxy with automatic SSL certificates via Let's Encrypt.

**Networking:**
- Service connects to `reverse-proxy` network (must exist)
- Create network: `docker network create reverse-proxy`

**Deployment:**
- Builds from Dockerfile (Hugo static site generator)
- Container runs nginx to serve static files
- nginx-proxy handles routing and SSL

---

## Stopping/Updating

```bash
# Stop container
docker compose down

# Rebuild and restart
./docker-run.sh

# View logs
docker compose logs -f web
```

---

## Technology Stack

- **Hugo** - Static site generator
- **Docker** - Containerization
- **Nginx** - Web server
- **Let's Encrypt** - SSL certificates (via nginx-proxy)

---

**Last Updated:** 2026-02-03
