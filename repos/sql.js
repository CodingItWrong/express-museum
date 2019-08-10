const Sequelize = require('sequelize')
const db = require('../models')
const { Restaurant } = db

const repo = {
  all: () => Restaurant.findAll(),
}

module.exports = repo
