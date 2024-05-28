import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import db from "../config/db.js";

const User = db.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },


}, {
    hooks: {
        // encripta la contraseña antes de guardar a la base de datos
        beforeCreate: async function(user) {
            const salt = await bcrypt.genSalt(10)
            user.password = await bcrypt.hash(user.password, salt)
        }
    },
    scopes: {
        deleteAttributes: {
            attributes: {
                exclude: ['password', 'token', 'confirmed', 'createdAt', 'updatedAt'],
            }
        }
    }
}) 

User.prototype.verifyPassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}


export default User