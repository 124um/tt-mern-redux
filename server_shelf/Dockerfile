FROM node:13.0.1

WORKDIR /usr/src/api
COPY package*.json ./

RUN npm install
RUN npm install -g nodemon
COPY . .

EXPOSE 8000

CMD ["npm","start"]