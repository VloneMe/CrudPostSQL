// models/Bus.js  
const { Model, DataTypes } = require('sequelize');  
const sequelize = require('../config/database');  
const Seat = require('./Seat'); // Import the Seat model  

class Bus extends Model {}  

Bus.init({  
    bus_id: {  
        type: DataTypes.INTEGER,  
        autoIncrement: true,  
        primaryKey: true,  
    },  
    bus_name: {  
        type: DataTypes.STRING,  
        allowNull: false,  
    },  
    capacity: {  
        type: DataTypes.INTEGER,  
        allowNull: false,  
    },  
    seat_layout: {  
        type: DataTypes.ENUM('2 by 2', '1 by 2'),  
        allowNull: false,  
    },  
    operator_id: {  
        type: DataTypes.INTEGER,  
        references: {  
            model: 'Operators',  
            key: 'operator_id',  
        },  
    },  
}, {  
    sequelize,  
    modelName: 'Bus',  
    timestamps: true,  
});  

// Define the association  
Bus.hasMany(Seat, { foreignKey: 'bus_id', as: 'seats' });  
Seat.belongsTo(Bus, { foreignKey: 'bus_id', as: 'bus' });  

module.exports = Bus;