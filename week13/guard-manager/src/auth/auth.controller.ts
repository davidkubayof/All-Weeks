import { Controller, Post, Body, Res , UseGuards } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { type Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto , @Res() res:Response): Promise<void> {
    const {name , password} = createUserDto
    await this.authService.register(createUserDto);    
    const { access_token } = await this.authService.signIn(name , password)
    res.header({ "access_token": access_token})
    res.json(`register sucsess`)
  }
  @Post('login')
  async login(@Body() signInDto: Record< string , any> , @Res() res:Response): Promise<void> {
    const { access_token } = await this.authService.signIn(signInDto.name , signInDto.password)
    res.header({ "access_token": access_token})
    res.json(`login sucsess`)
  }
}