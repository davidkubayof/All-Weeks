import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { AuthGuard } from './Guard/auth.guard';
import { RolesGuard } from './Guard/roles.guard';

@Module({
  imports: [
    forwardRef(()=>UsersModule),
    JwtModule.register({
      global: true,
      secret: 'oujeowujgepowj',
      signOptions: { expiresIn: '60w' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard , RolesGuard ],
  exports: [AuthGuard],
})
export class AuthModule {}
