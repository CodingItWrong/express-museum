const express = require('express')

const factory = repo => {
  const getRestaurantsRoute = (req, res) => {
    res.send(repo.all())
  }

  const memoryRouter = express.Router()
  memoryRouter.get('/restaurants', getRestaurantsRoute)

  return memoryRouter
}

module.exports = factory
