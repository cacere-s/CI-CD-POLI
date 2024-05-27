import express from 'express';

const app = express();

app.use(express.json());

app.get('/api/v1', (req, res) => {
  res.send('Hola Mundo')
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log("server connected successfully")
})