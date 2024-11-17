// models/Seat.js  
const { Model, DataTypes } = require('sequelize');  
const sequelize = require('../config/database');  

class Seat extends Model {}  

Seat.init({  
    seat_id: {  
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
    position_x: {  
        type: DataTypes.INTEGER,  
        allowNull: false,
    },  
    position_y: {  
        type: DataTypes.INTEGER,  
        allowNull: false,  
    },  
    is_booked: {  
        type: DataTypes.BOOLEAN,  
        defaultValue: false,  // Indicates if the seat is booked  
    }  
}, {  
    sequelize,  
    modelName: 'Seat',  
    timestamps: true,  
});  

module.exports = Seat;