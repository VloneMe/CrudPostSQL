// models/Booking.js  
const { Model, DataTypes } = require('sequelize');  
const sequelize = require('../config/database');  

class Booking extends Model {}  

Booking.init({  
    booking_id: {  
        type: DataTypes.INTEGER,  
        autoIncrement: true,  
        primaryKey: true,  
    },  
    user_id: {  
        type: DataTypes.INTEGER,  
        references: {  
            model: 'Users',  
            key: 'user_id',  
        },  
    },  
    trip_id: {  
        type: DataTypes.INTEGER,  
        references: {  
            model: 'Trips',  
            key: 'trip_id',  
        },  
    },  
    number_of_seats: {  
        type: DataTypes.INTEGER,  
        allowNull: false,  
    },  
    total_price: {  
        type: DataTypes.FLOAT,  
        allowNull: false,  
    },  
    status: {  
        type: DataTypes.STRING,  
        defaultValue: 'confirmed', // or 'canceled'  
    },  
}, {  
    sequelize,  
    modelName: 'Booking',  
    timestamps: true,  
});