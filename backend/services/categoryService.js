const Categories = require('../models/categories');

const getCategories = async()=>{
    const categories = await Categories.findAll();
    if(!categories){
        throw new Error('No categories')
    }
    return categories;    
}

module.exports = {
    getCategories
}