import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isBetween from "dayjs/plugin/isBetween";
import { IBookingData, BookedDayType } from "../../types/booking-calendar.type";
import { IBooking } from "../../types/booking.type";

dayjs.extend(isSameOrAfter);
dayjs.extend(isBetween);

export const BookingCalendarUtils = {
  getCellData(date: Dayjs, bookings: IBooking[]): IBookingData | null {
    const bookedData = BookingCalendarUtils.getBookedData(date, bookings);

    if (!bookedData) {
      return null;
    }

    const bookedDayType = BookingCalendarUtils.getBookedDayType(
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

  getInitialBookingData(date: Dayjs): IBooking {
    return {
      name: "",
      guests: 2,
      prepaid: false,
      note: "",
      bookedDays: 1,
      startDate: dayjs(date),
      endDate: dayjs(date).add(1, 'day'),
    };
  }
};


