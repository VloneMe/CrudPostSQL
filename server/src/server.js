const express = require('express');  
const bodyParser = require('body-parser');  
const cors = require('cors');  
const sequelize = require('./config/database');  

const server = express();  
const PORT = process.env.PORT || 3000;  

// Middleware  
server.use(cors());  
server.use(bodyParser.json());  

// Test the database connection  
sequelize.authenticate()  
    .then(() => {  
        console.log('[Database]: connection established.');  
    })  
    .catch(err => {  
        console.error('[Database]: Unable to connect to the database:', err);  
    });  

// Routes  
server.use('/api/users/', require('./routes/userRoute'));
server.use('/api/auth/', require('./routes/authRoutes'));  

// Start the server  
server.listen(PORT, () => {  
    console.log(`Server is running on http://localhost:${PORT}`);  
});