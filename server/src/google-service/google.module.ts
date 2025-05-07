import { Module } from '@nestjs/common';
import { GoogleServiceController } from './google.controller';
import { GoogleService } from './google.service';
import { ConfigModule } from '@nestjs/config';
import { SheetsService } from './sheet/sheet.service';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [GoogleServiceController],
  providers: [GoogleService, SheetsService]
})
export class GoogleServiceModule {}
