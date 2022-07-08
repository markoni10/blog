FROM node:lts-slim as api

WORKDIR /api

COPY --chown=1000 . /api

COPY --chown=1000 package.json package-lock.json /api/

RUN apt update && \
    apt install build-essential -y

RUN npm i --location=global nodemon

RUN npm ci

RUN npm run prisma-generate

EXPOSE 5000

ENTRYPOINT [ "npm", "run", "dev" ]

FROM mariadb:10.8 as db

WORKDIR /docker-entrypoint-initdb.d/

COPY posts.sql .

EXPOSE 3306

ENTRYPOINT [ "docker-entrypoint.sh" ]

CMD [ "mariadbd" ]
