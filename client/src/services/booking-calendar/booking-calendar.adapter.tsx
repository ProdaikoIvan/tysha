import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isBetween from "dayjs/plugin/isBetween";
import { IBooking, IBookingDpo } from "../../types/booking.type";

dayjs.extend(isSameOrAfter);
dayjs.extend(isBetween);

export const BookingCalendarAdaptor = {
  transformListFromDPO(data: IBookingDpo[]): IBooking[] {
    return data.map((booking) => this.transformFromDPO(booking));
  },

  transformFromDPO(data: IBookingDpo): IBooking {
    return {
      ...data,
      startDate: dayjs(data.startDate),
      endDate: dayjs(data.endDate),
    };
  },

  transformToDPO(data: IBooking): IBookingDpo {
    return {
      ...data,
      startDate: dayjs(data.startDate).format("YYYY-MM-DD"),
      endDate: dayjs(data.endDate).format("YYYY-MM-DD"),
    };
  },
};
