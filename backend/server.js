require('dotenv').config()
const sequelize = require('./config/db');
const express = require('express');
const app = express();

// middlewares
app.use(express.json());


sequelize.sync() 
    .then(() => {
        console.log('Database connected');
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log(err);
    });
