FROM node:latest
WORKDIR /usr/src/client
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]