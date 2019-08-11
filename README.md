# Express Museum

Demonstrates various service layers, data layers, and deployment platforms in Express.

## Service Layers

- REST - a simple JSON REST service
- JSON:API - a JSON:API compliant service implemented with [jsonapi-serializer](https://github.com/SeyZ/jsonapi-serializer)
- GraphQL - a GraphQL endpoint implemented with [apollo-server-express](https://www.apollographql.com/docs/apollo-server/)

## Data Layers

- Memory - an in-memory repo
- SQL - a Postgres database accessed with [Sequelize](https://sequelize.org/master/manual/getting-started.html)
- Mongo - a Mongo database accessed with [Mongoose](https://mongoosejs.com/docs/index.html)

## Deployment

### Running Locally

- Mongo: start a Mongo server locally, duplicate `.env.sample` to `.env`, and change `MONGODB_URI` if necessary.
- Postgres: change the `development` values in `config/config.json` if necessary

```sh
$ yarn sequelize db:migrate
$ yarn sequelize db:seed:all
$ yarn watch
```

### Heroku

```sh
$ heroku create
$ heroku addons:create heroku-postgresql
$ heroku addons:create mongolab
$ git push heroku master
$ heroku run yarn sequelize db:migrate
$ heroku run yarn sequelize db:seed:all
```

### AWS Lambda via Serverless.com

[Install Serverless Framework](https://serverless.com/framework/docs/providers/aws/guide/installation/). Getting AWS credentials set up for it is a bit tricky; rather than following Serverless.com's instructions, follow the AWS setup instructions in [this blog post](https://hackernoon.com/a-crash-course-on-serverless-with-node-js-632b37d58b44).

Register for [MongoDB Atlas](https://cloud.mongodb.com) and create a free database.

Duplicate `serverless.yml.sample` as `serverless.yml` and set the `MONGODB_URI` variable.

```sh
$ sls deploy
```
