// middlewares/tokenBlacklist.js  
const tokenBlacklist = new Set(); // In-memory store  

const addTokenToBlacklist = (token) => {  
    tokenBlacklist.add(token);  
};  

const isTokenBlacklisted = (token) => {  
    return tokenBlacklist.has(token);  
};  

module.exports = { addTokenToBlacklist, isTokenBlacklisted };