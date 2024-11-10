require('dotenv').config()
const express = require('express');

const app = express();

// middlewares
app.use(express.json());

// routes
const routes = require('./routes');
app.use('/api', routes);
module.exports = app;