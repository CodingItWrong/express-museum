const express = require('express')

const restaurants = [
  { id: 1, name: 'Sushi Place' },
  { id: 2, name: 'Burger Place' },
]

let app = express()
app.use((req, res) => {
  let route = `${req.method} ${req.url}`

  if (route == 'GET /restaurants') {
    res.send(restaurants)
  } else {
    res.status(404)
    res.send('404 Not Found')
  }
})

app.listen(3000)
