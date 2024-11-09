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
    user_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
})

module.exports = Recipes;