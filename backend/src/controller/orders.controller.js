const ordersService = require('../service/orders.service');

module.exports = {
  async getOrders(req, res) {
    const { buyerId } = req.query;
    const { status, data } = await ordersService.getOrders(buyerId);
    return res.status(status).json(data);
  },
};