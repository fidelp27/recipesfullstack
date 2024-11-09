const Recipe = require('../models/recipes');


const getRecipes = async(userId)=>{
    const recipes = await Recipe.findAll({where: {user_id: userId}})
    if(!recipes){
        return []
    }
    return recipes;
}

const getRecipeById = async(id, userId)=>{
    const recipe =  await Recipe.findOne({where: {id, user_id: userId}}) 
    if(!recipe){
        throw new Error('Recipe not found');
    }
    return recipe;
}

const createRecipe = async(data, userId)=>{
    const {name, ingredients, directions} = data;
    return await Recipe.create({
        name,
        ingredients,
        directions,
        user_id: userId
    })
}

const updateRecipe = async(id, data, userId)=>{
    const recipe = await getRecipeById(id, userId);
    if(!recipe){
        throw new Error('Recipe not found');
    }
    return await recipe.update(data);
}

const deleteRecipe = async(id, userId)=>{
    const recipe = await getRecipeById(id, userId);
    if(!recipe){
        throw new Error('Recipe not found');
    }
    return await recipe.destroy();
}

module.exports = {
    getRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe
}