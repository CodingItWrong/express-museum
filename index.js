if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = require('./app')

const port = process.env.PORT || 80
app.listen(port)
