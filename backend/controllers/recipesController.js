const recipeServices = require('../services/recipeServices');


const getRecipes = async(req, res)=>{
    try{
        console.log("Controlador getRecipes alcanzado. Usuario:", req.user);
        const recipes = await recipeServices.getRecipes(req.user.id)
        if(!recipes){
            return res.status(200).json({message: 'No recipes found'});
        }
        res.json(recipes);
    }catch(err){
        console.error("Error en getRecipes:", err);
        res.status(400).json({message: err.message})
    }
}

const getRecipeById = async(req, res)=>{
    try{
        const recipe = await recipeServices.getRecipeById(req.params.id, req.user.id)
        res.json(recipe);
    }catch(err){
        res.status(400).json({message: err.message})
    }
}

const updateRecipe = async(req, res)=>{
    try{
        const updateRecipe = await recipeServices.updateRecipe(req.params.id, req.body, req.user.id)
        res.json(updateRecipe);
    }catch(err){
        res.status(400).json({message: err.message})
    }
}

const createRecipe = async(req,res)=>{
    try{
        const createRecipe = await recipeServices.createRecipe(req.body, req.user.id)
        res.json(createRecipe);
    }catch(err){
        res.status(400).json({message: err.message})
    }
}

const deleteRecipe =async(req, res)=>{
    try{
        const deleteRecipe = await recipeServices.deleteRecipe(req.params.id, req.user.id)
        res.json(deleteRecipe);
    }catch(err){
        res.status(400).json({message: err.message})
    }
}

const searchRecipes = async(req, res)=>{
    try{
        const recipes = await recipeServices.searchRecipes(req.query, req.user.id)
        res.status(200).json(recipes);
    }catch(err){
        res.status(400).json({message: err.message})
    }
}
module.exports = {
    getRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe,
    searchRecipes
}