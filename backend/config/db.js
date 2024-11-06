const { Sequelize } = require('sequelize');
require('dotenv').config();


const isProduction = process.env.NODE_ENV === 'production';
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: isProduction ? false : console.log,
    port: process.env.DB_PORT
})

module.exports = sequelize;