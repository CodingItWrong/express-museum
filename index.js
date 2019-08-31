const { httpServer, graphqlSql } = require('./app')

const port = process.env.PORT || 80
httpServer.listen(port, () => {
  console.log(
    `🚀 Server ready at http://localhost:${port}${graphqlSql.graphqlPath}`
  )
  console.log(
    `🚀 Subscriptions ready at ws://localhost:${port}${graphqlSql.subscriptionsPath}`
  )
})
