const bcrypt = require('bcrypt');  
const jwt = require('jsonwebtoken');  
const User = require('../models/User');  
const { addTokenToBlacklist } = require('../middleware/tokenBlacklist');
const { sendEmail } = require('../config/email'); // Utility function to send emails  

const JWT_SECRET = 'your_secret_key'; // Replace with your actual secret  

const authController = {  
    login: async (req, res) => {  
        const { email, password } = req.body;  

        try {  
            const user = await User.findOne({ where: { email } });  
            if (!user) {  
                return res.status(404).json({ message: 'User not found' });  
            }  

            const isMatch = await bcrypt.compare(password, user.password);  
            if (!isMatch) {  
                return res.status(401).json({ message: 'Invalid password' });  
            }  

            const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });  

            return res.json({   
                id: user.id,   
                username: user.username,   
                email: user.email,   
                role: user.role,   
                token   
            });  

        } catch (error) {  
            console.error('Error during login:', error);  
            return res.status(500).json({ message: 'Internal server error' });  
        }  
    },  

    logout: (req, res) => {  
        const token = req.headers['authorization']?.split(' ')[1];  
        if (token) {  
            addTokenToBlacklist(token); // Add the token to blacklist  
        }  
        res.status(200).json({ message: 'Logged out successfully' });  
    }   
}; 

const requestPasswordReset = async (req, res) => {  
    const { email } = req.body;  

    try {  
        const user = await User.findOne({ where: { email } });  
        if (!user) {  
            return res.status(404).json({ message: 'User not found' });  
        }  

        // Create a password reset token  
        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });  

        // Create a reset URL (you should update this to your front-end or API base URL)  
        const resetUrl = `http://yourdomain.com/reset-password/${token}`;  

        // Send email with the reset URL  
        await sendEmail({  
            to: email,  
            subject: 'Password Reset Request',  
            text: `Click this link to reset your password: ${resetUrl}`  
        });  

        res.status(200).json({ message: 'Password reset link sent' });  
    } catch (error) {  
        console.error(error);  
        res.status(500).json({ message: 'Error processing request' });  
    }  
};  

const resetPassword = async (req, res) => {  
    const { token } = req.params;  
    const { newPassword } = req.body;  

    try {  
        // Verify the token  
        const decoded = jwt.verify(token, JWT_SECRET);  
        const user = await User.findByPk(decoded.id);  

        if (!user) {  
            return res.status(404).json({ message: 'User not found' });  
        }  

        // When updating the password  
        const hashedPassword = await bcrypt.hash(newPassword, 10);  

        // Update the user's password (make sure to hash it!)  
        user.password = hashedPassword;
        await user.save();  

        res.status(200).json({ message: 'Password updated successfully' });  
    } catch (error) {  
        console.error(error);  
        res.status(500).json({ message: 'Error resetting password' });  
    }  
};  


module.exports = { 
    authController, 
    requestPasswordReset,  
    resetPassword  
};  