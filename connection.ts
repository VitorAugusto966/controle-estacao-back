import { Sequelize } from "sequelize-typescript";


import { Acesso} from "./models/acesso"
import { Estacao } from "./models/estacao";
import { User } from "./models/usuario";
const connection = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "cr07",
  database: "teste",
  logging: false,
  models: [ User,Estacao,Acesso],
});

export default connection;