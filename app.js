// serverless build process errors out without this,
// but it seems like it shouldn't be necessary
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')

const rest = require('./routes/rest')
const jsonapi = require('./routes/jsonapi')
const graphql = require('./routes/graphql')

let app = express()

const memory = require('./repos/memory')
app.use('/rest-memory', rest(memory))
app.use('/jsonapi-memory', jsonapi(memory))
graphql(memory).applyMiddleware({ app, path: '/graphql-memory' })

const mongo = require('./repos/mongo')
app.use('/rest-mongo', rest(mongo))
app.use('/jsonapi-mongo', jsonapi(mongo))
graphql(mongo).applyMiddleware({ app, path: '/graphql-mongo' })

if (!process.env.DISABLE_SQL) {
  const sql = require('./repos/sql')
  app.use('/rest-sql', rest(sql))
  app.use('/jsonapi-sql', jsonapi(sql))
  graphql(sql).applyMiddleware({ app, path: '/graphql-sql' })
}

module.exports = app
