const Recipe = require('../models/recipes');
const Categories = require('../models/categories');

const getRecipes = async(userId)=>{
    const recipes = await Recipe.findAll({where: {user_id: userId}, include: [{model: Categories, attributes: ['id', 'name']}], as: 'category'})
    if(!recipes){
        return []
    }
    return recipes;
}

const getRecipeById = async(id, userId)=>{
    const recipe =  await Recipe.findOne({where: {id, user_id: userId}, include:[{model: Categories, attributes: ['id','name'], as: 'category'}]}) 
    if(!recipe){
        throw new Error('Recipe not found');
    }
    return recipe;
}

const createRecipe = async(data, userId)=>{
    const {name, ingredients, directions, category_id} = data;
    // buscar categoria 
    const category = await Categories.findOne({where: {id: category_id}})
    if(!category){
        throw new Error('Category not found');
    }
    return await Recipe.create({
        name,
        ingredients,
        directions,
        user_id: userId,
        category_id: category_id
    })
}

const updateRecipe = async(id, data, userId)=>{
    const recipe = await getRecipeById(id, userId);
    if(!recipe){
        throw new Error('Recipe not found');
    }
    if(data.category_id){
        const category = await Categories.findOne({where: {id: data.category_id}})
        if(!category){
            throw new Error('Category not found');
        }
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

const searchRecipes = async(filters, userId)=>{
    const {name, category, ingredients} = filters;
    const query = {
        where: {user_id: userId},
        include: []
    }
    if(name){
        query.where.name = {[Op.like]: `%${name}%`};   
    }
    if(ingredients){
        query.where.ingredients = {[Op.like]: `%${ingredients}%`};
    }
    if(category){
        query.include.push({model: Categories, where: {name: category}, attributes: []})
    }
    return await Recipe.findAll(query);
}

module.exports = {
    getRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe,
    searchRecipes
}