const express = require('express');
const router = express.Router();

const authRoutes = require('./v1/authRoutes');
const recipeRoutes = require('./v1/recipesRoutes');
const categoriesRoutes = require('./v1/categoriesRoutes');


router.use('/v1/auth', authRoutes);
router.use('/v1/recipes', recipeRoutes);
router.use('/v1/categories', categoriesRoutes);

module.exports = router;