import { Injectable } from '@nestjs/common';
import {
  IGoogleRowData,
  IGoogleRowDataValue as IGoogleCellValue,
  IGoogleSheetData,
  IGoogleSheetMerge,
  IMerge,
} from './types/google.interface';
import { SheetsService } from './sheet/sheet.service';
import dayjs from 'dayjs';

@Injectable()
export class GoogleService {
  constructor(private sheetsService: SheetsService) {}

  async fetchSheetData(): Promise<string[]> {
    const { sheetId, apiKey, range } = this.sheetsService.getGoogleConfig();

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}?includeGridData=true&ranges=${range}&key=${apiKey}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const formatedData = this.formatBookedDate(data);

    return formatedData;
  }

  formatBookedDate(sheetData: IGoogleSheetData): string[] {
    const merges: IGoogleSheetMerge[] = sheetData.sheets[0].merges;
    const rowData: IGoogleRowData[] = sheetData.sheets[0].data[0].rowData;
    const formatedMerges: IMerge[] = this.formatMonatRange(merges);
    const bookedData = this.getBookedData(rowData, formatedMerges);

    return bookedData;
  }

  formatMonatRange(merges: IGoogleSheetMerge[]): IMerge[] {
    const formatedMerges = merges
      .sort(
        (a: IGoogleSheetMerge, b: IGoogleSheetMerge) =>
          a.startRowIndex - b.startRowIndex,
      )
      .map(
        (
          merge: IGoogleSheetMerge,
          index: number,
          array: IGoogleSheetMerge[],
        ) => {
          const defaultRowLengths = 7;

          return {
            startColumnIndex: merge.startColumnIndex,
            startRowIndex: merge.startRowIndex + 2,
            endColumnIndex: merge.endColumnIndex - 1,
            endRowIndex: array[index + 1]
              ? array[index + 1].startRowIndex - 1
              : merge.endRowIndex + defaultRowLengths,
          };
        },
      );
    return formatedMerges;
  }

  getBookedData(data: IGoogleRowData[], formatedMerges: IMerge[]): string[] {
    const bookedDays: string[] = [];

    formatedMerges.forEach((merge, index) => {
      const startRow = merge.startRowIndex;
      const endRow = merge.endRowIndex;
      const startColumn = merge.startColumnIndex;
      const endColumn = merge.endColumnIndex;
      for (let rowIndex = startRow; rowIndex <= endRow; rowIndex++) {
        const rowValues: IGoogleCellValue[] = data[rowIndex]?.values;
        if (!rowValues) continue;

        for (
          let columnIndex = startColumn;
          columnIndex <= endColumn;
          columnIndex++
        ) {
          const cellValue: IGoogleCellValue = rowValues[columnIndex];
          if (!cellValue?.effectiveValue?.numberValue) continue;

          if (this.isBooked(cellValue)) {
            const day = cellValue.effectiveValue.numberValue;
            const month = index;
            const bookedDate = dayjs()
              .set('month', month)
              .set('date', day)
              .format('YYYY-MM-DD');

            const isAfter = dayjs().isAfter(bookedDate, 'day');

            if (isAfter) continue;

            bookedDays.push(bookedDate);
          }
        }
      }
    });

    return bookedDays;
  }

  isBooked(cellValue: IGoogleCellValue): boolean {
    const bgColor = cellValue?.effectiveFormat?.backgroundColor;
    return bgColor.red === 1 && bgColor.green === 1 && bgColor.blue === 1
      ? false
      : true;
  }
}
