import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { Assignment } from 'src/assignment/entities/assignment.entity';
import { Shift } from 'src/shifts/entities/shift.entity';

@Module({
  imports:[forwardRef(()=>AuthModule),
    SequelizeModule.forFeature([User , Assignment ,Shift]),],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
