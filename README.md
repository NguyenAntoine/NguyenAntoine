# Portfolio Antoine Nguyen

> Portefeuille de compétences pour mon parcours scolaire et professionnel

## Usage

```bash
# launch a server for localhost:1313 with hot reload
hugo serve --disableFastRender

# build site into public directory
hugo
```

## Deployment

Create the `.env` file from [.env.dist](.env.dist) example with the
environment variables from [docker let's encrypt nginx proxy](https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion/wiki/Basic-usage)

```bash
./docker-run.sh
```
