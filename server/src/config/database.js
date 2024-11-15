const { Sequelize } = require('sequelize');  

const sequelize = new Sequelize('testdb', 'root', 'root@123', {  
    host: 'localhost',  
    dialect: 'postgres',  
});  

module.exports = sequelize;