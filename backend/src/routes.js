const express = require('express');
const BuyersController = require('./controller/buyers.controller');
const OrdersController = require('./controller/orders.controller');

const routes = express.Router();

routes.get('/', async (req, res) => {
  res.send('Página iniciada localmente!');
});

// ROTA BUYERS TESTE
routes.get('/buyers', BuyersController.index);

// ROTA ORDERS
routes.get('/orders', OrdersController.getOrders);

module.exports = routes;