export type CalendarCell = {
    day: number;        // день місяця (1–31)
    date: Date;         // повна дата
    isToday?: boolean;  // чи є це сьогоднішній день
    isBooked?: boolean; // чи заброньовано (для візуалізації)
  } | null;
  
  export interface ICalendarWeek {
    days: CalendarCell[]; // завжди довжина 7
  }
  
  export interface ICalendarMonth {
    month: number;       // 1–12
    year: number;
    weeks: ICalendarWeek[];
  }

  export interface IMonat {
    index: number;
    monthName: string;
  }