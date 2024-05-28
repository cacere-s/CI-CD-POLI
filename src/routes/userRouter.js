import express from 'express';
const route = express.Router()

route.get('/user', (req, res) => {
    res.send('Usuario')
  })

  route.post('/create', (req, res) => {
    res.send('Crear Usuario')
  })

  route.post('/login', (req, res) => {
    res.send('iniciar sesion')
  })

  export default route


