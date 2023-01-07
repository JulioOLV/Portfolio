FROM node:16.16.0-slim

WORKDIR /home/node/app

COPY ./package.json ./

RUN npm install

COPY . .

CMD npm run dev