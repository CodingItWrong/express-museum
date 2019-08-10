let nextId = 1

const restaurants = [
  { id: nextId++, name: 'Sushi Place' },
  { id: nextId++, name: 'Burger Place' },
]

const repo = {
  all: () => Promise.resolve(restaurants),
  create: fields => {
    const restaurant = Object.assign({ id: nextId++ }, fields)
    restaurants.push(restaurant)
    return Promise.resolve(restaurant)
  },
}

module.exports = repo
