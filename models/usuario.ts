import { Table, Model, Column, DataType, BelongsToMany, PrimaryKey, ForeignKey } from "sequelize-typescript";
import { Acesso } from "./acesso";
import { Estacao } from "./estacao";




@Table({
  timestamps: false,
  tableName: "usuario",
  
})
export class User extends Model {
  @BelongsToMany(() => Estacao, () => Acesso)
  estacoes!: Estacao[];

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  senha!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nome!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  tipo!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status!: string;
}