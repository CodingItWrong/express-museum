if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')

const rest = require('./routes/rest')
const jsonapi = require('./routes/jsonapi')
const graphql = require('./routes/graphql')

const memory = require('./repos/memory')
const sql = require('./repos/sql')
const mongo = require('./repos/mongo')

let app = express()

app.use('/rest-memory', rest(memory))
app.use('/rest-sql', rest(sql))
app.use('/rest-mongo', rest(mongo))

app.use('/jsonapi-memory', jsonapi(memory))
app.use('/jsonapi-sql', jsonapi(sql))
app.use('/jsonapi-mongo', jsonapi(mongo))

graphql(memory).applyMiddleware({ app, path: '/graphql-memory' })
graphql(sql).applyMiddleware({ app, path: '/graphql-sql' })
graphql(mongo).applyMiddleware({ app, path: '/graphql-mongo' })

app.listen(3000)
