const Buyers = require('../database/models/buyersModel');
const ordersModels = require('../models/orders.models');

module.exports = {
  async getOrders(buyerId) {
    const buyer = await Buyers.findByPk(buyerId);

    if (!buyer) {
      return {
        status: 'NOT_FOUND',
        data: { message: 'Buyer not found!'},
      };
    };

    const orders = await ordersModels.getOrders(buyerId);

    return {
      status: 'SUCCESSFUL',
      data: orders,
    };
  },
};
