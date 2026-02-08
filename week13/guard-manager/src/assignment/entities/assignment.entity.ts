import {
  Table,
  Column,
  Model,
  ForeignKey,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
import { User } from 'src/users/entities/user.entity'; 
import { Shift } from 'src/shifts/entities/shift.entity'; 

@Table({
  tableName: 'assignments',
  engine: 'InnoDB',
  indexes: [
    {
      unique: true,
      fields: ['userId', 'shiftId'],
    },
  ],
})
export class Assignment extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Shift)
  @Column
  shiftId: number;
}
