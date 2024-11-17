// routes/authRoutes.js  
const express = require('express');
const { requestPasswordReset, resetPassword, authController } = require('../controllers/authController');   
const authMiddleware = require('../middleware/authMiddleware');  

const router = express.Router();  

// Login route  
router.post('/login', authController.login); 

// Logout route (optional for stateless JWT, often done client-side)  
router.post('/logout', authMiddleware, authController.logout); 

router.post('/forgot-password', requestPasswordReset); // Request password reset link  
router.post('/reset-password/:token', resetPassword); // Reset password with token

module.exports = router;