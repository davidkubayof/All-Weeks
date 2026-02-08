import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ShiftsModule } from './shifts/shifts.module';
import { AssignmentModule } from './assignment/assignment.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rootpass123',
      database: 'guard_manager',
      autoLoadModels: true,
      synchronize: true,
    }),
    ConfigModule.forRoot({
      envFilePath: '../.env',
      isGlobal: true,
    }),
    UsersModule,
    AuthModule,
    ShiftsModule,
    AssignmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
