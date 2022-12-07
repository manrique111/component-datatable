FROM node:16-buster-slim

RUN apt update && apt -y upgrade \
    && npm install -g npm \
    && npm install -g @angular/cli

RUN mkdir -p /opt/app && mkdir -p /opt/config

COPY /app /opt/app
COPY config /opt/config

WORKDIR /opt/app

ENTRYPOINT /opt/config/entrypoint.sh
