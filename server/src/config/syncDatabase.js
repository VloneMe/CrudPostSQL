// syncDatabase.js  
const sequelize = require('./database');  
const User = require('../models/User');  

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