import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/Guard/auth.guard';
import { Role } from 'src/auth/Role/role.enum';
import { Roles } from 'src/auth/Role/roles.decorator';
import { RolesGuard } from 'src/auth/Guard/roles.guard';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

@UseGuards(AuthGuard , RolesGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  @Roles(Role.Commander)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  
  // @Get('me')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }
}
