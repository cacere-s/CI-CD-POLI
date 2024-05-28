import express from 'express';
import cors from 'cors'
import database from './config/database.js';

const app = express();
app.use(express.json());

const corsOption = {
  origin: '*', 
  optionsSuccessStatus:200,
  credentials:true
}
app.use(cors(corsOption))

try {
  await database.authenticate(app)
  console.log("database connection successful")
} catch (error) {
  console.log("database connection failed") 
}

// route imports 
import userRouter from './routes/userRouter.js'


// middlewar imports
app.use('/api/v1/auth', userRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log("server connected successfully")
})