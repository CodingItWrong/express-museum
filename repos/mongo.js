const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

const restaurantSchema = new mongoose.Schema({
  name: String,
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

Restaurant.find()
  .exec()
  .then(response => {
    if (response.length === 0) {
      const sushiPlace = new Restaurant({ name: 'Sushi Place' })
      const burgerPlace = new Restaurant({ name: 'Burger Place' })

      sushiPlace.save(err => err && console.error(err))
      burgerPlace.save(err => err && console.error(err))
    }
  })

const repo = {
  all: () => Restaurant.find(),
  create: fields => new Restaurant(fields).save(),
}

module.exports = repo
