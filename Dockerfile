FROM node:16-buster-slim

RUN apt update && apt -y upgrade \
    && npm install -g npm \
    && npm install -g @angular/cli

COPY /app /opt/app

RUN mkdir -p /opt/app

WORKDIR /opt/app

ENTRYPOINT ["tail", "-f", "/dev/null"]
