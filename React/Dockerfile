FROM node:20-alpine3.16

RUN mkdir /app

WORKDIR /app

COPY ./React/package.json /app

COPY ./React/ /app

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]