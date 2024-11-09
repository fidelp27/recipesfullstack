require('dotenv').config()
const express = require('express');

const app = express();

// middlewares
app.use(express.json());

// routes
const authRoutes = require('./routes/authRoutes');
const recipeRoutes = require('./routes/recipesRoutes');
app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipeRoutes);


module.exports = app;