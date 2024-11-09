require('dotenv').config()
const sequelize = require('./config/db');
const app = require('./app');


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
