FROM node:lts-slim as api

WORKDIR /api

COPY --chown=1000:1000 . .

COPY --chown=1000:1000 package.json package-lock.json ./

RUN apt update && \
    apt install build-essential -y

RUN npm i --location=global nodemon

RUN npm run prisma-generate

RUN npm ci

EXPOSE 5000

ENTRYPOINT [ "npm", "run", "dev" ]

FROM mariadb:10.8 as db

WORKDIR /docker-entrypoint-initdb.d/

COPY demo.sql .

EXPOSE 3306

ENTRYPOINT [ "docker-entrypoint.sh" ]

CMD [ "mariadbd" ]
