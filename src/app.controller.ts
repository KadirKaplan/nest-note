import { Controller, Get ,Redirect,Render} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('category')
  getHello(): string {
    return this.appService.getHello();
  }
}