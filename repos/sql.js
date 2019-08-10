const Sequelize = require('sequelize')

const sequelize = new Sequelize('postgres://josh:@localhost:5432')

const Restaurant = sequelize.define('restaurant', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})
