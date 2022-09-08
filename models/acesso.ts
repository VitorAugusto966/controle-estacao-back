import { Table, Model, Column, DataType, ForeignKey, BelongsToMany} from "sequelize-typescript";
import { Estacao } from "./estacao";
import { User } from "./usuario";


@Table({
  timestamps: false,
  tableName: "acesso",
  
})
export class Acesso extends Model {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId!: number;

  @ForeignKey(() => Estacao)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  estacaoId!: number;
}