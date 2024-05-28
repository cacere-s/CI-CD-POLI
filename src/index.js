import express from 'express';

const app = express();


app.use(express.json());
import userRouter from './routes/userRouter.js'
app.use('/api/v1/auth', userRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log("server connected successfully")
})