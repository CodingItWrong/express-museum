FROM node:lts

RUN mkdir /myapp
WORKDIR /myapp

COPY package.json /myapp/package.json
COPY yarn.lock /myapp/yarn.lock
RUN yarn install --production

COPY . /myapp

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD yarn start
