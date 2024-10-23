FROM node:23-alpine

RUN mkdir -p /code

WORKDIR /code

COPY ./backend/express-js-api /code

RUN rm -rf node_modules/

RUN rm -f package-lock.json/

RUN npm install

EXPOSE 5899