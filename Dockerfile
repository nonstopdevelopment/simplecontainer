FROM node:22-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --omit=dev || echo "No package.json, skipping npm install"

COPY simple-script.js .

CMD [ "node", "simple-script.js" ]
