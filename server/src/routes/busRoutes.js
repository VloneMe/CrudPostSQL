// routes/busRoutes.js  
const express = require('express');  
const { createBusWithSeats, getBus } = require('../controllers/busController');  

const router = express.Router();  

router.post('/buses', createBusWithSeats); // Updated route  
router.get('/buses/:busId', getBus);  

module.exports = router;