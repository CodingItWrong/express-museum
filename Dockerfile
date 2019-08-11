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

CMD bin/wait-for-it.sh postgres:5432 -- yarn sequelize db:migrate && \
    yarn sequelize db:seed:all && \
    yarn start
