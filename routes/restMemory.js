const express = require('express')

const restaurants = [
  { id: 1, name: 'Sushi Place' },
  { id: 2, name: 'Burger Place' },
]

const getRestaurantsRoute = (req, res) => {
  res.send(restaurants)
}

const restMemoryRouter = express.Router()
restMemoryRouter.get('/restaurants', getRestaurantsRoute)

module.exports = restMemoryRouter
