const jwt = require('jsonwebtoken');
const config = require('./config/config');

// Función para generar un token de autenticación
function generateAuthToken(user) {
    const token = jwt.sign({ id: user.id, username: user.username }, config.secretKey, { expiresIn: '1h' });
    return token;
}

// Middleware para verificar el token JWT
function authenticateJWT(req, res, next) {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado, se requiere un token' });
    }

    try {
        const decoded = jwt.verify(token, config.secretKey);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).json({ message: 'Token no válido' });
    }
}

module.exports = {
    generateAuthToken,
    authenticateJWT
};
