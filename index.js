const express = require('express')

const restaurants = [
  { id: 1, name: 'Sushi Place' },
  { id: 2, name: 'Burger Place' },
]

let app = express()

const getRestaurantsRoute = (req, res) => {
  res.send(restaurants)
}

const router = express.Router()
router.get('/restaurants', getRestaurantsRoute)
app.use(router)

app.listen(3000)
