const httpServer = require('./app')

const port = process.env.PORT || 80
httpServer.listen(port)
