import { Request, Response } from "express";
import { User } from "../models/usuario";
const jwt = require("jsonwebtoken");



export default {
  async login(request: Request, response: Response) {
    //desestruturacao
    const { email, senha } = request.body;
    const usuarios: User[] = await User.findAll();

    //Verificação somente para testes (substituir)
    const user = usuarios.find((user) => {
      if (user.email === email && user.senha === senha) {
        return user;
      }
    });

    if (user) {
      const payload = {
        email,
      };

      const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: 300, // expires in 5min
      });

      return response.status(200).json({
        token: token,
      });
    }
    return response.status(500).json({ message: "Login inválido!" });
  },
};