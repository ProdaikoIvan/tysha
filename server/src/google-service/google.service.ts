import { Injectable } from '@nestjs/common';
import { IGoogleSheetData } from './types/google.interface';
import { SheetsService } from './sheet/sheet.service';

@Injectable()
export class GoogleService {
  constructor(private sheetsService: SheetsService) {}

  async fetchSheetData(): Promise<IGoogleSheetData> {
    const { sheetId, apiKey, range } = this.sheetsService.getGoogleConfig();

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}?includeGridData=true&ranges=${range}&key=${apiKey}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  }
}
