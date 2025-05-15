import { Module } from '@nestjs/common';
import { FirebaseModule } from '../firebase/firebase.module';
import { AuthController } from './auth.controller';
import { FirebaseAuthGuard } from './firebase-auth.guard';

@Module({
  imports: [FirebaseModule],
  controllers: [AuthController],
  providers: [FirebaseAuthGuard],
})
export class AuthModule {}