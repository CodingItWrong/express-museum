const restaurants = [
  { id: 1, name: 'Sushi Place' },
  { id: 2, name: 'Burger Place' },
]

const repo = {
  all: () => Promise.resolve(restaurants),
}

module.exports = repo
