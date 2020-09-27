FROM node:14-slim

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y python3 build-essential

COPY . /usr/src/app

RUN npm i

CMD [ "npm", "start" ]