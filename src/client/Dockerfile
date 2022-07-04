FROM node:lts-slim

WORKDIR /client

COPY --chown=1000 . /client

COPY --chown=1000 package.json package-lock.json /client/

RUN npm ci

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]
