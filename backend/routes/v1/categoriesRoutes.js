const express = require('express');
const router = express.Router();


const categoriesControllers = require('../../controllers/categoriesController');
const authMiddleware = require('../../middlewares/authMiddleware');

router.get('/', authMiddleware, categoriesControllers.getCategories);

module.exports = router;