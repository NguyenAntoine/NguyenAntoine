FROM alpine:latest as build-stage

LABEL description="Docker container for building static sites with the Hugo static site generator."
LABEL maintainer="Antoine Nguyen <antoine.ngu@outlook.fr>"

# config
ENV HUGO_VERSION=0.53
#ENV HUGO_TYPE=
ENV HUGO_TYPE=_extended

ENV HUGO_ID=hugo${HUGO_TYPE}_${HUGO_VERSION}
ADD https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/${HUGO_ID}_Linux-64bit.tar.gz /tmp
RUN tar -xf /tmp/${HUGO_ID}_Linux-64bit.tar.gz -C /tmp \
    && mkdir -p /usr/local/sbin \
    && mv /tmp/hugo /usr/local/sbin/hugo \
    && rm -rf /tmp/${HUGO_ID}_linux_amd64 \
    && rm -rf /tmp/${HUGO_ID}_Linux-64bit.tar.gz \
    && rm -rf /tmp/LICENSE.md \
    && rm -rf /tmp/README.md

RUN apk add --update git asciidoctor libc6-compat libstdc++ \
    && apk upgrade \
    && apk add --no-cache ca-certificates

# définit le dossier 'app' comme dossier de travail
WORKDIR /app

# copie les fichiers et dossiers du projet dans le dossier de travail (par exemple : le dossier 'app')
COPY . .

# build le projet
RUN hugo

FROM nginx:alpine as production-stage
COPY --from=build-stage /app/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
