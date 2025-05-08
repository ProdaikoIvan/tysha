import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleServiceModule } from './google-service/google.module';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [GoogleServiceModule, BookingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
