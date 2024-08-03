const express = require('express');

const routes = express.Router();

routes.get('/', async (req, res) => {
  res.send('Página iniciada localmente!');
});

module.exports = routes;