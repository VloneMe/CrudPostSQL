// controllers/userController.js  
const User = require('../models/User');  
const bcrypt = require('bcrypt');  

// Create User (passenger or agent)  
const createUser = async (req, res) => {  
    try {  
        const { username, email, password, fullName, phoneNumber, address, role } = req.body;  

        // Validate role  
        if (!['passenger', 'agent'].includes(role)) {  
            return res.status(400).json({ error: "Role must be 'passenger' or 'agent'" });  
        }  

        const hashedPassword = await bcrypt.hash(password, 10);  

        const user = await User.create({   
            username,   
            email,   
            password: hashedPassword,   
            fullName,   
            phoneNumber,   
            address,   
            role   
        });  
        res.status(201).json({ id: user.id, username: user.username, email: user.email, fullName: user.fullName, role: user.role });  
    } catch (error) {  
        res.status(400).json({ error: error.message });  
    }  
};  

// Adjust other methods to handle roles  
const getUserById = async (req, res) => {  
    try {  
        const user = await User.findByPk(req.params.id, { attributes: { exclude: ['password'] } });  
        
        if (user) {  
            res.status(200).json(user);  
        } else {  
            res.status(404).json({ error: 'User not found' });  
        }  
    } catch (error) {  
        res.status(500).json({ error: error.message });  
    }  
};  

const getAllUsers = async (req, res) => {  
    try {  
        const users = await User.findAll({  
            attributes: { exclude: ['password'] }, // Exclude password in response  
        });  
        res.status(200).json(users);  
    } catch (error) {  
        res.status(500).json({ error: error.message });  
    }  
};    

const updateUser = async (req, res) => {  
    try {  
        const user = await User.findByPk(req.params.id);  

        if (user) {  
            const { username, password } = req.body;  

            // Only hash the password if it is provided  
            const hashedPassword = password ? await bcrypt.hash(password, 10) : user.password;  

            await user.update({ username, password: hashedPassword });  
            res.status(200).json({ ...user.get(), password: hashedPassword });  
        } else {  
            res.status(404).json({ error: 'User not found' });  
        }  
    } catch (error) {  
        res.status(400).json({ error: error.message });  
    }  
};  

const deleteUser = async (req, res) => {  
    try {  
        const user = await User.findByPk(req.params.id);  

        if (user) {  
            await user.destroy();  
            res.status(204).send();  
        } else {  
            res.status(404).json({ error: 'User not found' });  
        }  
    } catch (error) {  
        res.status(500).json({ error: error.message });  
    }  
};  

module.exports = {  
    createUser,  
    getAllUsers,  
    getUserById,  
    updateUser,  
    deleteUser,  
};