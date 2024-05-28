import Sequelize from 'sequelize'
import { config } from 'dotenv'

config({ path: '.env' })

const database = new Sequelize(process.env.LOCAL_DBNAME, process.env.LOCAL_DBUSER, process.env.LOCAL_DBPASSWORD, {
  host: process.env.LOCAL_DBHOST,
  port: process.env.LOCAL_DBPORT,
  dialect: 'mysql',
  define: {
    timestamps: true
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorAliases: false
})

export default database