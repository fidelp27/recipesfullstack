const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Recipes = sequelize.define('recipes', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ingredients:{
        type: DataTypes.STRING,
        allowNull: false
    },
    directions:{
        type: DataTypes.STRING,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
})

module.exports = Recipes;