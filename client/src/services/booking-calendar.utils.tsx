import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isBetween from "dayjs/plugin/isBetween";
import { IBooking, INewBooking } from "../types/booking.type";
import { BookedDayType, IBookingData } from "../types/booking-calendar.type";

dayjs.extend(isSameOrAfter);
dayjs.extend(isBetween);

export const BookingCalendarService = {
  getCellData(date: Dayjs, bookings: IBooking[]): IBookingData | null {
    const bookedData = BookingCalendarService.getBookedData(date, bookings);

    if (!bookedData) {
      return null;
    }

    const bookedDayType = BookingCalendarService.getBookedDayType(
      date,
      bookedData
    );

    return {
      bookedData: bookedData,
      bookedDayType: bookedDayType,
    };
  },

  getBookedData(value: Dayjs, bookings: IBooking[]): IBooking | undefined {
    return bookings.find((booking) => 
      dayjs(value).isSameOrAfter(booking.startDate, "date") &&
      dayjs(value).isBefore(booking.endDate, "date")
    );
  },

  getBookedDayType(date: Dayjs, bookedData: IBooking): BookedDayType {
    const startDay = dayjs(bookedData.startDate);
    const endDay = dayjs(bookedData.endDate).subtract(1, "day");

    const isSinglDayBooking = startDay.isSame(endDay, "day");

    if (!isSinglDayBooking) {
      const isStartDate = date.isSame(startDay, "day");
      if (isStartDate) {
        return BookedDayType.start;
      }

      const isEndDay = date.isSame(endDay, "day");
      if (isEndDay) {
        return BookedDayType.end;
      }

      const isBetween = date.isBetween(startDay, endDay, "day");
      if (isBetween) {
        return BookedDayType.between;
      }
    }

    return BookedDayType.singl;
  },

  getInitialBookingData(): INewBooking {
    return {
      name: "",
      guests: 2,
      prepaid: false,
      note: "",
      bookedDays: 1
    };
  }
};


