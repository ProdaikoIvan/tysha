import { CalendarCell, ICalendarMonth, ICalendarWeek, IMonat } from "./calendar.type";

export const calendarService = {
    generateCalendarMonth(year: number, month: number): ICalendarMonth {
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const today = new Date();

      const weeks: ICalendarWeek[] = [];
      let currentWeek: CalendarCell[] = [];
    
      let weekday = (firstDay.getDay() + 6) % 7;
    
      for (let i = 0; i < weekday; i++) {
        currentWeek.push(null);
      }
    
      for (let day = 1; day <= lastDay.getDate(); day++) {
        const date = new Date(year, month, day);
    
        currentWeek.push({
          day,
          date,
          isToday:
            date.toDateString() === today.toDateString()
        });
    
        if (currentWeek.length === 7) {
          weeks.push({ days: currentWeek });
          currentWeek = [];
        }
      }
    
      if (currentWeek.length > 0) {
        while (currentWeek.length < 7) {
          currentWeek.push(null);
        }
        weeks.push({ days: currentWeek });
      }
    
      return {
        month,
        year,
        weeks
      };
    },

    generateCalendarYear(year: number, month: number): ICalendarMonth[] {
      if (month) {
        return [this.generateCalendarMonth(year, month)];
      }
    
      const months: ICalendarMonth[] = [];
    
      for (let m = 1; m <= 12; m++) {
        months.push(this.generateCalendarMonth(year, m));
      }
    
      return months;
    },

    generateMonthList(locale = 'uk-UA'): IMonat[] {
      return Array.from({ length: 12 }, (_, index) => {
        const date = new Date(2025, index);
        const name = new Intl.DateTimeFormat(locale, { month: 'long' }).format(date);
        return {
          index, // 0 - січень, 11 - грудень
          monthName: name.charAt(0).toUpperCase() + name.slice(1) // з великої літери
        };
      });
    }
  };