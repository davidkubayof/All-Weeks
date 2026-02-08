import {
  Column,
  Model,
  Table,
  DataType,
  BelongsToMany,
  AutoIncrement,
  PrimaryKey,
} from 'sequelize-typescript';
import { Assignment } from 'src/assignment/entities/assignment.entity';
import { Shift } from 'src/shifts/entities/shift.entity';

@Table({ tableName: 'users' })
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.ENUM('soldier', 'commander'),
    defaultValue: 'soldier',
  })
  role: string;

  @BelongsToMany(() => Shift, () => Assignment)
  shifts: Shift[];
}
