const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const config = require('./config/config');
const userRoutes = require('./routes/userRoutes'); // Importar rutas de usuarios
const authRoutes = require('./routes/authRoutes'); // Importar rutas de autenticación
const { authenticateJWT } = require('./middlewares');
const { createUser, getUsers, updateUser, deleteUser } = require('./controllers/userController');
const { login } = require('./controllers/authController');

// Configurar Express
const app = express();
app.use(express.json());

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

// Sincronizar el modelo con la base de datos
sequelize.sync();

// Rutas para el manejo de usuarios (usando las rutas importadas)
app.use('/users', userRoutes);

// Rutas para la autenticación (usando las rutas importadas)
app.use('/auth', authRoutes);

// Ruta para el inicio de sesión
app.post('/login', login);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
