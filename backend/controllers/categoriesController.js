
const categoryService = require('../services/categoryService');

const getCategories = async(req, res)=>{
    try{
        const categories = await categoryService.getCategories();
        if(!categories){
            return res.status(200).json({message: 'No categories found'});
        }
        res.status(200).json(categories);
    }catch(err){
        res.status(400).json({message: err.message})
    }
}

module.exports = {
    getCategories
}