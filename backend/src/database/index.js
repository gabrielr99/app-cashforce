const Sequelize = require('sequelize');
const dbConfig = require('../../config/db');

const Buyers = require('./models/buyersModel');
const Orders = require('./models/ordersModel');
const Offers = require('./models/offersModel');
const Orderportions = require('./models/orderportionsModel');
const Providers = require('./models/providersModels');
const Sponsors = require('./models/sponsorsModel');
const Users = require('./models/usersModel');
const Cnpjs = require('./models/cnpjsModel');

const connection = new Sequelize(dbConfig);

Buyers.init(connection);
Cnpjs.init(connection);
Orders.init(connection);
Offers.init(connection);
Orderportions.init(connection);
Providers.init(connection);
Sponsors.init(connection);
Users.init(connection);

Buyers.associate(connection.models);
Orders.associate(connection.models);
Offers.associate(connection.models);
Orderportions.associate(connection.models);
Providers.associate(connection.models);
Sponsors.associate(connection.models);


module.exports = connection;