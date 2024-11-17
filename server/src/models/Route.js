// models/Route.js  
const { Model, DataTypes } = require('sequelize');  
const sequelize = require('../config/database');  

class Route extends Model {}  

Route.init({  
    route_id: {  
        type: DataTypes.INTEGER,  
        autoIncrement: true,  
        primaryKey: true,  
    },  
    source: {  
        type: DataTypes.STRING,  
        allowNull: false,  
    },  
    destination: {  
        type: DataTypes.STRING,  
        allowNull: false,  
    },  
    distance: {  
        type: DataTypes.FLOAT,  
        allowNull: false,  
    },  
    duration: {  
        type: DataTypes.STRING,  
        allowNull: false,  
    },  
}, {  
    sequelize,  
    modelName: 'Route',  
    timestamps: true,  
});