import z from "zod";

const REGEX = {
  USERNAME: /^[\w](?!.*?\.{2})[\w.]{1,28}[\w]$/gm,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/gm,
};

const register = z.object({
  name: z
    .string({
      invalid_type_error: "El nombre debe ser una cadena",
      required_error: "El nombre es requerido",
    })
    .min(5, { message: "Debe tener 5 o mas caracteres" }),

  username: z
    .string({
      invalid_type_error: "El nombre de usuario debe ser una cadena",
      required_error: "El nombre de usuario es requerido",
    })
    .min(3, { message: "Debe tener 3 o mas caracteres" })
    .regex(new RegExp(REGEX.USERNAME), {
      message: "nombre de usuario invalido",
    }),

  email: z.string().email(),

  password: z
    .string()
    .regex(new RegExp(REGEX.PASSWORD), { message: "contraseña Invalida" }),
});

export function registerValidation(input) {
  return register.safeParse(input);
}
