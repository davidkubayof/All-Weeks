import { Controller, Get, Query } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  @Get()
  getHello(
    @Query(`firstName`) firstName: string,
    @Query(`lastName`) lastName: string,
  ): string {
    return `walcome ${firstName} ${lastName}`;
  }
}
