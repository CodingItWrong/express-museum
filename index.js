const express = require('express')
const rest = require('./routes/rest')
const memory = require('./repos/memory')
const sql = require('./repos/sql')
const mongo = require('./repos/mongo')

let app = express()

app.use('/rest-memory', rest(memory))
app.use('/rest-sql', rest(sql))
app.use('/rest-mongo', rest(mongo))

app.listen(3000)
