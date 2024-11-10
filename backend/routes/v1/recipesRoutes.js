const express = require('express');
const router = express.Router();

const recipesControllers = require('../../controllers/recipesController');
const authMiddleware = require('../../middlewares/authMiddleware');

router.get('/', authMiddleware, recipesControllers.getRecipes);
router.get('/search', authMiddleware, recipesControllers.searchRecipes);
router.get('/:id', authMiddleware, recipesControllers.getRecipeById);
router.post('/', authMiddleware, recipesControllers.createRecipe);
router.put('/:id', authMiddleware, recipesControllers.updateRecipe);
router.delete('/:id', authMiddleware, recipesControllers.deleteRecipe);

module.exports = router;