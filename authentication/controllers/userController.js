// userController.js

// Importar el modelo de usuario
const User = require('../models/User');

// Controlador para crear un nuevo usuario
const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // Crear un nuevo usuario en la base de datos
        const newUser = await User.create({ username, email, password });
        // Enviar respuesta con el nuevo usuario creado
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        // Enviar respuesta de error si ocurre algún problema
        res.status(500).json({ message: 'Error del servidor' });
    }
};

// Otros controladores (getUsers, updateUser, deleteUser, etc.) también deben estar definidos aquí

// Exportar createUser y otros controladores
module.exports = {
    createUser,
    // Otros controladores aquí
};
