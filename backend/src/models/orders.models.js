const Orders = require('../database/models/ordersModel');


module.exports = {
  async getOrders(buyerId) {
    const orders = await Orders.findAll(
      {
        where: { buyerId },
      }
    );

    return orders;
  },
};
