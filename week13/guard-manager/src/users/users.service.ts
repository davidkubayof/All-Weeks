import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
// import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
      @InjectModel(User)
      private readonly usersModel: typeof User
    ) {}
  async register(createUserDto:CreateUserDto): Promise<User>{
    const user = await this.usersModel.create({...createUserDto})
    const userObj = user.get({ plain: true });
    return userObj
  }  
  async findOne(name:string): Promise<User | null> {
    const user = await this.usersModel.findOne({ where: { name }})
    if (!user) return null;
    return user.get({ plain: true });
  }
  async findAll() {
    return  await this.usersModel.findAll()
  }
}
