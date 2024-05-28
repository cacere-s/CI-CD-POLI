// models.js

const { Sequelize, DataTypes } = require('sequelize');
const config = require('./config/config'); // Ruta completa al archivo config.js

// Configurar Sequelize
const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

// Definir el modelo de Usuario
const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Exportar el modelo
module.exports = {
    User
};
