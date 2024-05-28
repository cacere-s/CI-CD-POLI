import express from "express";
import { createUser, users } from "../controllers/userController.js";
const route = express.Router();

route.get("/user", users);

route.post("/create", createUser);

route.post("/login", (req, res) => {
  res.send("iniciar sesion");
});

export default route;
