const Sequelize = require('sequelize');
const connection = require('../database/database');

const Product = connection.define('products', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
})
Product.sync({force: false})

module.exports = Product;
