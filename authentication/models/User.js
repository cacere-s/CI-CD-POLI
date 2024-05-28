// User.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    // Definición de atributos
});

module.exports = User;
