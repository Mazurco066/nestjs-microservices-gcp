FROM node:alpine

WORKDIR /usr/src/app

COPY . .

# RUN npm i -g yarn

RUN yarn install

CMD ["yarn", "test"]