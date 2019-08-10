const express = require('express')

const factory = repo => {
  const getRestaurantsRoute = (req, res) => {
    repo.all().then(restaurants => {
      res.send(restaurants)
    })
  }

  const memoryRouter = express.Router()
  memoryRouter.get('/restaurants', getRestaurantsRoute)

  return memoryRouter
}

module.exports = factory
