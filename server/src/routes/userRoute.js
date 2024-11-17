// routes/userRoutes.js  
const express = require('express');  
const { createUser, getUserById, deleteUser, getAllUsers, updateUser } = require('../controllers/userController');  
const { authorize } = require('../middleware/roles'); 
const authMiddleware = require('../middleware/authMiddleware'); 

const router = express.Router();  

router.post('/', createUser); // Public route for user creation  
router.get('/:id', authMiddleware, getUserById); // Restricted access   
router.get('/', authMiddleware, getAllUsers); 
router.put('/:id', authMiddleware, updateUser);  
router.delete('/:id', authMiddleware, deleteUser);  

module.exports = router;