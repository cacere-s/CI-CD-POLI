// authController.js

// Controlador para iniciar sesión
const login = async (req, res) => {
    try {
        // Lógica para iniciar sesión
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error del servidor' });
    }
};

// Exportar login
module.exports = {
    login,
};
