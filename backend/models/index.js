// relaciones

const User = require('./users');
const Recipes = require('./recipes');
const Categories = require('./categories');

// Un usuario puede tener muchas recetas
User.hasMany(Recipes, {
    foreignKey: 'user_id'
});

// Una receta pertenece a un usuario
Recipes.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {
    User,
    Recipes
}

// Relaciones de recipes y categorias
Recipes.belongsTo(Categories, {
    foreignKey: 'category_id'
});

Categories.hasMany(Recipes, {
    foreignKey: 'category_id'
})