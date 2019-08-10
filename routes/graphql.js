const { ApolloServer, gql } = require('apollo-server-express')

const typeDefs = gql`
  type Restaurant {
    name: String
  }

  type Query {
    restaurants: [Restaurant]
  }

  type Mutation {
    createRestaurant(name: String): Restaurant
  }
`

const factory = repo => {
  const resolvers = {
    Query: {
      restaurants: () => repo.all(),
    },
    Mutation: {
      createRestaurant: (_, args) => repo.create(args),
    },
  }

  const apolloServer = new ApolloServer({ typeDefs, resolvers })
  return apolloServer
}

module.exports = factory
