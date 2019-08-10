const express = require('express')
const bodyParser = require('body-parser')
const { Serializer, Deserializer } = require('jsonapi-serializer')

const restaurantSerializer = new Serializer('restaurants', {
  attributes: ['name'],
})
const restaurantDeserializer = new Deserializer()

const factory = repo => {
  const getRestaurantsRoute = (req, res) => {
    repo.all().then(restaurants => {
      res.send(restaurantSerializer.serialize(restaurants))
    })
  }

  const createRestaurantsRoute = (req, res) => {
    restaurantDeserializer
      .deserialize(req.body)
      .then(fields => repo.create(fields))
      .then(restaurant => {
        res.status(201)
        res.send(restaurantSerializer.serialize(restaurant))
      })
  }

  const router = express.Router()
  router
    .route('/restaurants')
    .get(getRestaurantsRoute)
    .post(bodyParser.json(), createRestaurantsRoute)

  return router
}

module.exports = factory
