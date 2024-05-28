const express = require('express');
const router = express.Router();
const { createUser, getUsers, updateUser, deleteUser } = require('../controllers/userController');
const { authenticateJWT } = require('../middlewares');

// Rutas para el manejo de usuarios
router.post('/', authenticateJWT, createUser);
router.get('/', authenticateJWT, getUsers);
router.put('/:id', authenticateJWT, updateUser);
router.delete('/:id', authenticateJWT, deleteUser);

module.exports = router;
