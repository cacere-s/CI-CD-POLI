import database from "../src/config/database.js";
import User from "../src/models/userSchema.js";
import UserMock from './Users.js'

const importData = async () => {
 try {
  await database.authenticate()
  await database.sync()

  await User.bulkCreate(UserMock)

  console.log('datos importados')
  process.exit()
  
 } catch (error) {
  console.log('error al importar los datos', error)
  process.exit(1)
 } 
}

if(process.argv[2] === '-i') {importData()}

