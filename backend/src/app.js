const express = require('express');
const dbConfig = require('../config/db');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes)



module.exports = app;