// syncDatabase.js  
const sequelize = require('./database');  
const User = require('../models/User'); 
const Seat = require("../models/Seat");
const  Bus = require("../models/Bus");
const Route = require("../models/Route");
const Trip = require("../models/Trip");
const Operator = require("../models/Operator");
const Booking = require("../models/Booking");

const syncDatabase = async () => {  
    try {  
        await sequelize.sync({ force: false });
        console.log('Database synced successfully.');  
    } catch (error) {  
        console.error('Error syncing database:', error);  
    } finally {  
        await sequelize.close();  
    }  
};  

syncDatabase();