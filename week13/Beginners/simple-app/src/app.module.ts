import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { TimeModule } from './time/time.module';

@Module({
  imports: [HelloModule, TimeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
