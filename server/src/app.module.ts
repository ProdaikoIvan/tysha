import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GoogleServiceModule } from './google/google.module';
import { BookingsModule } from './bookings/bookings.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [GoogleServiceModule, BookingsModule, AuthModule],
  controllers: [AppController],
})
export class AppModule {}
