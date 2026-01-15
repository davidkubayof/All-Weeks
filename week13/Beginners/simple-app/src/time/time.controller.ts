import { Controller, Get } from '@nestjs/common';

@Controller('time')
export class TimeController {
  @Get()
  getTime(): string {
    // your code here
    return `${new Date()}`
  }
}
