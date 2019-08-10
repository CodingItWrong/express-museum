const express = require('express')
const JSONAPISerializer = require('jsonapi-serializer').Serializer

const restaurantSerializer = new JSONAPISerializer('restaurants', {
  attributes: ['name'],
})

const factory = repo => {
  const getRestaurantsRoute = (req, res) => {
    repo.all().then(restaurants => {
      res.send(restaurantSerializer.serialize(restaurants))
    })
  }

  const router = express.Router()
  router.get('/restaurants', getRestaurantsRoute)

  return router
}

module.exports = factory
