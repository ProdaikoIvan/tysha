import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { Request } from 'express';
import { AuthenticatedRequest } from 'src/types/authenticated-request';
import { FirebaseAuthGuard } from './firebase-auth.guard';

@Controller('auth')
export class AuthController {
  @UseGuards(FirebaseAuthGuard)
  @Get('profile')
  getProfile(@Req() req: AuthenticatedRequest) {
    return {
      uid: req.user?.uid,
      email: req.user?.email,
      name: req.user?.name,
    };
  }
}