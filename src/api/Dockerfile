FROM node:lts-slim

WORKDIR /api

COPY --chown=1000 . /api

COPY --chown=1000 package.json package-lock.json /api/

RUN npm i --location=global nodemon

RUN npm ci

EXPOSE 5000

ENTRYPOINT [ "npm", "run", "dev" ]
