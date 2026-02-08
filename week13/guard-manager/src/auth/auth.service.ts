import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { hash, compare } from '../utils/utils';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(createUserDto: CreateUserDto): Promise<User> {
    createUserDto.password = await hash(createUserDto.password);
    return await this.usersService.register(createUserDto);
  }

  async signIn(username: string , pass: string){//: Promise<{ access_token: string }> {
    const user: User | null = await this.usersService.findOne(username);
    if (!user) {
      throw new UnauthorizedException();
    }
    const match:boolean = await compare(pass, user.password);

    if(!match){
      throw new UnauthorizedException();
    }
    const { name , password , role } = user
    const payload = { name , password , roles:[role]};
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
