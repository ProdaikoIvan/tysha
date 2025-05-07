import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleServiceModule } from './google-service/google.module';

@Module({
  imports: [GoogleServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
