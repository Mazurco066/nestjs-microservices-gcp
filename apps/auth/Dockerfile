# Development enviroment
FROM node:alpine As development

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json tsconfig.json

# RUN npm i -g yarn

RUN yarn install

COPY apps/auth apps/auth
COPY libs libs

# Install specific module dependencies
RUN cd apps/auth && yarn install

RUN yarn build

# Production setup
FROM node:alpine As production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

# RUN npm i -g yarn

RUN yarn install --prod

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/apps/auth/main"]