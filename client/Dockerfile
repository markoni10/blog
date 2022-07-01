FROM node:lts-slim

WORKDIR /client

COPY . /client

COPY package.json package-lock.json /client/

RUN npm ci

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]
