// models/Operator.js  
const { Model, DataTypes } = require('sequelize');  
const sequelize = require('../config/database');  

class Operator extends Model {}  

Operator.init({  
    operator_id: {  
        type: DataTypes.INTEGER,  
        autoIncrement: true,  
        primaryKey: true,  
    },  
    name: {  
        type: DataTypes.STRING,  
        allowNull: false,  
    },  
    contact_info: {  
        type: DataTypes.STRING,  
        allowNull: false,  
    },  
}, {  
    sequelize,  
    modelName: 'Operator',  
    timestamps: true,  
});