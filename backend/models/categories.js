const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Categories = sequelize.define('categories', {
    "id":{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    "name":{
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Categories;