import bcrypt from "bcryptjs"

const User = [
  {
    name: 'Julio Caceres',
    username: 'Caceres',
    password: bcrypt.hashSync('12345678', 10),
    email: 'example@julio.com'
  }
]

export default User