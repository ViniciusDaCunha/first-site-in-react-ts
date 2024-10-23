FROM node:23-alpine

RUN apk add --no-cache libc6-compat

RUN apk update 

RUN mkdir -p /code

WORKDIR /code

COPY ./frontend /code

RUN npm install

EXPOSE 5173