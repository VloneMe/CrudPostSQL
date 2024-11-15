// models/User.js  
const { Model, DataTypes } = require('sequelize');  
const sequelize = require('../config/database');  

class User extends Model {}  

User.init(  
  {  
    id: {  
      type: DataTypes.UUID,  
      defaultValue: DataTypes.UUIDV4,  
      primaryKey: true,  
      allowNull: false,  
    },  
    username: {  
      type: DataTypes.STRING,  
      unique: true,  
      allowNull: false,  
    },  
    email: {  
      type: DataTypes.STRING,  
      unique: true,  
      allowNull: false,  
    },  
    password: {  
      type: DataTypes.STRING,  
      allowNull: false,  
    },  
    phoneNumber: {  
      type: DataTypes.STRING,  
      allowNull: true,  
    },  
    fullName: {  
      type: DataTypes.STRING,  
      allowNull: false,  
    },  
    address: {  
      type: DataTypes.STRING,  
      allowNull: true,  
    },  
    role: {  
      type: DataTypes.ENUM('passenger', 'agent'),  
      allowNull: false,  
      defaultValue: 'passenger',
    },  
    createdAt: {  
      type: DataTypes.DATE,  
      defaultValue: DataTypes.NOW,  
    },  
    updatedAt: {  
      type: DataTypes.DATE,  
      defaultValue: DataTypes.NOW,  
    },  
  },  
  {  
    sequelize,  
    modelName: 'User',  
    timestamps: true,  
  }  
);  

module.exports = User;