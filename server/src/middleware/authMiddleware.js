// middlewares/authMiddleware.js  
const jwt = require('jsonwebtoken');  
const { isTokenBlacklisted } = require('./tokenBlacklist'); // Importing blacklist logic  
const JWT_SECRET = 'your_secret_key';  

const authMiddleware = (req, res, next) => {  
    const token = req.headers['authorization']?.split(' ')[1];  

    if (!token) {  
        return res.status(403).json({ message: 'No token provided' });  
    }  

    if (isTokenBlacklisted(token)) {  
        return res.status(401).json({ message: 'Token has been invalidated' });  
    }  

    jwt.verify(token, JWT_SECRET, (err, decoded) => {  
        if (err) {  
            return res.status(401).json({ message: 'Unauthorized' });  
        }  
        req.userId = decoded.id; // Attaching userId to request  
        next();  
    });  
};  

module.exports = authMiddleware;