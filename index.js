const express = require('express')
const rest = require('./routes/rest')
const memory = require('./repos/memory')
const sql = require('./repos/sql')

let app = express()

app.use('/rest-memory', rest(memory))
app.use('/rest-sql', rest(sql))

app.listen(3000)
