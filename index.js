const express = require('express')
const restMemoryRouter = require('./routes/restMemory')

let app = express()

app.use('/rest-memory', restMemoryRouter)

app.listen(3000)
