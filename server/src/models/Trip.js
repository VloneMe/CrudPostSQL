// models/Trip.js  
const { Model, DataTypes } = require('sequelize');  
const sequelize = require('../config/database');  

class Trip extends Model {}  

Trip.init({  
    trip_id: {  
        type: DataTypes.INTEGER,  
        autoIncrement: true,  
        primaryKey: true,  
    },  
    bus_id: {  
        type: DataTypes.INTEGER,  
        references: {  
            model: 'Buses',  
            key: 'bus_id',  
        },  
    },  
    route_id: {  
        type: DataTypes.INTEGER,  
        references: {  
            model: 'Routes',  
            key: 'route_id',  
        },  
    },  
    departure_time: {  
        type: DataTypes.DATE,  
        allowNull: false,  
    },  
    arrival_time: {  
        type: DataTypes.DATE,  
        allowNull: false,  
    },  
    price: {  
        type: DataTypes.FLOAT,  
        allowNull: false,  
    },  
}, {  
    sequelize,  
    modelName: 'Trip',  
    timestamps: true,  
});