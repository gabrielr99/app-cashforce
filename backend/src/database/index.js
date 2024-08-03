const Sequelize = require('sequelize');
const dbConfig = require('../../config/db');

const Buyers = require('./models/buyersModel');
const Orders = require('./models/ordersModel');

const connection = new Sequelize(dbConfig);

Buyers.init(connection);
Orders.init(connection);

module.exports = connection;