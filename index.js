const express = require('express')
const rest = require('./routes/rest')
const memory = require('./repos/memory')

let app = express()

app.use('/rest-memory', rest(memory))

app.listen(3000)
