import { Controller, Get } from '@nestjs/common';
import { GoogleService } from './google.service';

@Controller('google')
export class GoogleServiceController {
  constructor(private googleService: GoogleService) {}

  @Get('get-booked-days')
  getSheetData() {
    return this.googleService.fetchSheetData();
  }
}
