// middleware/roles.js  
const authorize = (roles) => {  
        return (req, res, next) => {  
            const userRole = req.user.role; // assuming req.user is populated after authentication  
            
            if (roles.includes(userRole)) {  
                return next();  
            }  
            
            return res.status(403).json({ error: 'Access denied' });  
        };  
    };  
    
module.exports = { authorize };