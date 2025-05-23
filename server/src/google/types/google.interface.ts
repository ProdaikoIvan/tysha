export interface IMonthData extends IGoogleSheetMerge{
    monthName: string;
    endBlockIndex?: number;
}

export interface IGoogleSheetMerge {
    endColumnIndex: number;
    endRowIndex: number;
    sheetId: number;
    startColumnIndex: number;
    startRowIndex: number;
}

export interface IGoogleSheet {
    data: IGoogleData[];
    merges: IGoogleSheetMerge[]
}

export interface IGoogleRowDataValue {
    effectiveFormat: { 
        backgroundColor: {
            red?: number;
            green?: number;
            blue?: number;
        };
    },
    effectiveValue: {
        numberValue?: number;
        stringValue?: string;
    }
    formattedValue: string;
}

export interface IGoogleRowData {
    values: IGoogleRowDataValue[];
}

export interface IGoogleData {
    rowData: IGoogleRowData[];
}


export interface IGoogleSheetData {
    sheets: IGoogleSheet[];   
}

export interface IMerge {
  startColumnIndex: number;
  startRowIndex: number;
  endColumnIndex: number;
  endRowIndex: number;
}