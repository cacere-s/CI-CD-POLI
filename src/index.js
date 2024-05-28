import express from 'express';
import cors from 'cors'

const app = express();
app.use(express.json());

const corsOption = {
  origin: '*', 
  optionsSuccessStatus:200,
  credentials:true
}
app.use(cors(corsOption))

// route imports 
import userRouter from './routes/userRouter.js'

// middlewar imports
app.use('/api/v1/auth', userRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log("server connected successfully")
})