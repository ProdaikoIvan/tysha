import { Controller, Get } from '@nestjs/common';
import { GoogleService } from './google.service';

@Controller('google')
export class GoogleServiceController {
  constructor(private googleService: GoogleService) {}

  @Get('sheet')
  getSheetData() {
    return this.googleService.fetchSheetData();
  }
}
