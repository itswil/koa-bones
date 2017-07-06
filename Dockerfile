FROM node:8.1.2-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN npm i -g nodemon
RUN npm i

EXPOSE 3000
CMD [ "npm", "start" ]
