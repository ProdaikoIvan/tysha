import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { FirebaseAuthGuard } from './guards/auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //@UseGuards(FirebaseAuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    return { uid: req.user.uid, email: req.user.email };
  }
}
