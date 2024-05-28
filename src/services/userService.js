import User from "../models/userSchema.js";

export const showUsers = async () => {
  try {
    const users = await User.scope("deleteAttributes").findAll();
    return users;
  } catch (error) {
    return { error: true, message: "Error del servidor" }
  }
}

export const register = async ({ input }) => {
  const { email, username } = input;
  const emailExists = await User.findOne({ where: { email } });
  if (emailExists) return { error: true, message: "Email en uso" };

  const usernameExists = await User.findOne({ where: { username } });
  if (usernameExists)
    return { error: true, message: "Nombre de usuario en uso" };

  try {
    await User.create({
      ...input,
    });

    return { error: false, message: "Usuario creado exitosamente" };
  } catch (error) {
    return res.status(500).json({ error: true, message: "Error del servidor" });
  }
};

export const login = (input) => {
  // logica del servicio del login
};
