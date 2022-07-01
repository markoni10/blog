FROM node:lts-slim

WORKDIR /backend

COPY . /backend

COPY package.json package-lock.json /backend/

RUN npm i --location=global nodemon

RUN npm ci

EXPOSE 5000

ENTRYPOINT [ "npm", "run", "dev" ]
