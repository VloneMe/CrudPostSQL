const express = require('express');  
const bodyParser = require('body-parser');  
const cors = require('cors');  
const sequelize = require('./config/database');  

const app = express();  
const PORT = process.env.PORT || 3000;  

// Middleware  
app.use(cors());  
app.use(bodyParser.json());  

// Test the database connection  
sequelize.authenticate()  
    .then(() => {  
        console.log('[Database]: connection established.');  
    })  
    .catch(err => {  
        console.error('[Database]: Unable to connect to the database:', err);  
    });  

// Routes  
app.use('/api/users', require('./routes/userRoute'));  

// Start the server  
app.listen(PORT, () => {  
    console.log(`Server is running on http://localhost:${PORT}`);  
});