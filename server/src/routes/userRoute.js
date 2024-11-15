// routes/userRoutes.js  
const express = require('express');  
const { createUser, getUserById, deleteUser, getAllUsers, updateUser } = require('../controllers/userController');  
const { authorize } = require('../middleware/roles');  

const router = express.Router();  

router.post('/', createUser); // Public route for user creation  
router.get('/:id', authorize(['passenger', 'agent']), getUserById); // Restricted access   
router.get('/', getAllUsers); 
router.put('/:id', updateUser);  
router.delete('/:id', deleteUser);  

module.exports = router;