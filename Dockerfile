FROM node:12-alpine3.9

WORKDIR /usr/src/app

RUN apk add --no-cache python3 make g++

COPY . /usr/src/app

RUN npm i

CMD [ "npm", "start" ]