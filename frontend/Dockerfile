FROM node:alpine

WORKDIR /app
COPY . .

RUN npm install --global yarn
RUN yarn install

CMD ["yarn", "build"]