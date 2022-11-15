import 'reflect-metadata';
import express, { Request, Response } from "express";
import connection from "./connection";
import { User } from "./models/usuario";
import bodyParser from 'body-parser';
import { Estacao } from './models/estacao';
import {Acesso} from './models/acesso';
import Mail from './email'
const cors = require('cors');
import * as dotenv from "dotenv";
import UserController from './controllers/UserController';


const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));

 app.get("/", (req: Request, res: Response): Response => {
   return res.json({ message: "Sequelize Example 🤟" });
 });

app.post("/login", UserController.login);

app.get("/users", async (req: Request, res: Response): Promise<Response> => {
  const allUsers: User[] = await User.findAll();
  return res.status(200).json(allUsers);
});

app.route("/redefinir").post((req, res) => {
  const message = Object.assign({}, req.body);     
            
  Mail.to = message.to;
  Mail.subject = message.subject;
  Mail.message = message.message;
  let result = Mail.enviaEmail();

  res.status(200).json({ 'result': result })
});

app.get("/estacoes", async (req: Request, res: Response): Promise<Response> => {
  const allEstacoes: Estacao[] = await Estacao.findAll();
  return res.status(200).json(allEstacoes);
});

app.get("/acessos", async (req: Request, res: Response): Promise<Response> => {
  const allAcessos: Acesso[] = await Acesso.findAll();
  return res.status(200).json(allAcessos);
}); 

app.post("/estacoes", async (req: Request, res: Response): Promise<Response> => {
  const estacao: Estacao = await Estacao.create({ ...req.body });
  return res.status(201).json(estacao);
});

app.post("/acessos", async (req: Request, res: Response): Promise<Response> => {
  const acesso: Acesso = await Acesso.create({ ...req.body });
  return res.status(201).json(acesso);
}); 

app.get("/users/:id", async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const user: User | null = await User.findByPk(id);
  return res.status(200).json(user);
});

app.post("/users", async (req: Request, res: Response): Promise<Response> => {
 // var salt = bcrypt.genSaltSync(10)
  //req.body.senha = bcrypt.hashSync(req.body.senha, salt)

  const user: User = await User.create({ ...req.body });
  return res.status(201).json(user);
});

app.put("/users/:id", async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  await User.update({ ...req.body }, { where: { id } });
  const updatedUser: User | null = await User.findByPk(id);
  return res.status(200).json(updatedUser);
});

app.delete("/users/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const deletedUser: User | null = await User.findByPk(id);
    await User.destroy({ where: { id } });
    return res.status(200).json(deletedUser);
  }
);

const start = async (): Promise<void> => {
  try {
    await connection.sync();
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();