import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SheetsService {
  constructor(private configService: ConfigService) {}

  getGoogleConfig() {
    return {
      sheetId: this.configService.get('GOOGLE_SHEET_ID'),
      apiKey: this.configService.get('GOOGLE_API_KEY'),
      range: this.configService.get('GOOGLE_RANGE'),
    };
  }
}