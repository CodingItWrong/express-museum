const Sequelize = require('sequelize')
const db = require('../models')
const { Restaurant } = db

const repo = {
  all: () => Restaurant.findAll(),
  create: fields => Restaurant.create(fields),
}

module.exports = repo
