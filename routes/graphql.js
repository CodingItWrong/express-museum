const { ApolloServer, gql } = require('apollo-server-express')

const typeDefs = gql`
  type Restaurant {
    name: String
  }

  type Query {
    restaurants: [Restaurant]
  }
`

const factory = repo => {
  const resolvers = {
    Query: {
      restaurants: () => repo.all(),
    },
  }

  const apolloServer = new ApolloServer({ typeDefs, resolvers })
  return apolloServer
}

module.exports = factory
