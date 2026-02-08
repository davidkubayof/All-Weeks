import {
  Column,
  Model,
  Table,
  DataType,
  PrimaryKey,
  AutoIncrement,
  BelongsToMany,
} from 'sequelize-typescript';
import { Assignment } from 'src/assignment/entities/assignment.entity';
import { User } from 'src/users/entities/user.entity';

@Table({ tableName: 'shift' })
export class Shift extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  startTime: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  endTime: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  location: string;

  @BelongsToMany(() => User, () => Assignment)
  users: User[];
}
