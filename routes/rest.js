const express = require('express')
const bodyParser = require('body-parser')

const factory = repo => {
  const getRestaurantsRoute = (req, res) => {
    repo.all().then(restaurants => {
      res.send(restaurants)
    })
  }

  const createRestaurantsRoute = (req, res) => {
    repo.create(req.body).then(restaurant => {
      res.status(201)
      res.send(restaurant)
    })
  }

  const memoryRouter = express.Router()
  memoryRouter
    .route('/restaurants')
    .get(getRestaurantsRoute)
    .post(bodyParser.json(), createRestaurantsRoute)

  return memoryRouter
}

module.exports = factory
