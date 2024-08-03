const Buyers = require('../database/models/buyersModel');

// TEST: app-cashforce/backend/src/controllers/BuyersController.js

module.exports = {
  async index(req, res) {
    const buyers = await Buyers.findAll();

    return res.json(buyers);
  },
};
