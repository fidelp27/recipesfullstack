// relaciones

const User = require('./users');
const Recipes = require('./recipes');

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