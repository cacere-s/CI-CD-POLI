import { registerValidation } from "../validation/registerValidate.js";
import { showUsers, register } from '../services/userService.js'

export const users = async (req, res) => {
  const users = await showUsers()
  if(users.error) return res.status(500).json(users)
  return res.json(users)
};

export const createUser = async (req, res) => {
  const validation = registerValidation(req.body);
  if (!validation.success)
    return res.status(406).json({ message: validation.error });

  const newUser = await register({ input: req.body });
  if (newUser.error) return res.status(406).json(newUser);
  
  return res.json(newUser);
};

export const loginUser = async (req, res) => {
  // controlador de login
}
