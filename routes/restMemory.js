const express = require('express')
const memoryRepo = require('../repos/memory')

const getRestaurantsRoute = (req, res) => {
  res.send(memoryRepo.all())
}

const restMemoryRouter = express.Router()
restMemoryRouter.get('/restaurants', getRestaurantsRoute)

module.exports = restMemoryRouter
