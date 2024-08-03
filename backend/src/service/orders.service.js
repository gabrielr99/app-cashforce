const Buyers = require('../database/models/buyersModel');
const Orders = require('../database/models/ordersModel');
const ordersModels = require('../models/orders.models');

module.exports = {
  async getOrders(buyerId) {
    const buyer = await Buyers.findByPk(buyerId);

    if (!buyer) {
      return {
        status: 404,
        data: { message: 'Buyer not found'},
      };
    }

    const orders = await ordersModels.getOrders(buyerId);

    return {
      status: 200,
      data: orders,
    };
  },
};
