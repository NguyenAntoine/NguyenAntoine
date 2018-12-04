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

Running on nginx with a [docker let's encrypt nginx proxy](https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion/wiki/Basic-usage)

```bash
# build site into public directory
hugo

# run script docker for linux environment
./docker-run.sh

# run script docker for windows environment
.\docker-run.bat
```
