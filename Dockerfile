FROM node:17-buster-slim

RUN apt update && apt -y upgrade \
    && npm install -g npm@8.12.2 \
    && npm install -g @angular/cli

COPY /app /opt/app

RUN mkdir -p /opt/app

WORKDIR /opt/app

ENTRYPOINT ['cmd', 'ls']
