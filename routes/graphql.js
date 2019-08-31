const { ApolloServer, gql } = require('apollo-server-express')
const { PubSub } = require('apollo-server')

const pubsub = new PubSub()

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

  type Subscription {
    restaurantAdded: Restaurant
  }
`

const RESTAURANT_ADDED = 'RESTAURANT_ADDED'

const factory = repo => {
  const resolvers = {
    Query: {
      restaurants: () => repo.all(),
    },
    Mutation: {
      createRestaurant: (_, args) => {
        pubsub.publish(RESTAURANT_ADDED, {
          restaurantAdded: args,
        })
        repo.create(args)
        return args
      },
    },
    Subscription: {
      restaurantAdded: {
        subscribe: () => pubsub.asyncIterator([RESTAURANT_ADDED]),
      },
    },
  }

  const apolloServer = new ApolloServer({ typeDefs, resolvers })
  return apolloServer
}

module.exports = factory
