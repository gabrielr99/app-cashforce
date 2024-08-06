const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');

const corsOptions = {
  origin: 'http://localhost:8080', // Permite apenas essa origem
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(routes);

module.exports = app;