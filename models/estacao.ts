<<<<<<< HEAD
import { Table, Model, Column, DataType, BelongsToMany } from "sequelize-typescript";
import { User } from "./usuario";
import { Acesso } from "./acesso";

@Table({
  timestamps: false,
  tableName: "estacao",
  
})
export class Estacao extends Model {
  @BelongsToMany(() => User, () => Acesso)
  users!: User[];

  
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  cidade!: string;
}
=======
import { Table, Model, Column, DataType, BelongsToMany } from "sequelize-typescript";
import { User } from "./usuario";
import { Acesso } from "./acesso";

@Table({
  timestamps: false,
  tableName: "estacao",
  
})
export class Estacao extends Model {
  @BelongsToMany(() => User, () => Acesso)
  users!: User[];

  
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  cidade!: string;
}
>>>>>>> refs/remotes/origin/main
