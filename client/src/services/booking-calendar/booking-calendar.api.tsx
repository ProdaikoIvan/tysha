import { Dayjs } from "dayjs";
import { IBookedDay } from "../../types/booking.type";
import axiosInstance from "../api.service";

export const BookingCalendarAPI = {
  async getBookedDays(from: Dayjs, to: Dayjs): Promise<IBookedDay[] | null> {
    try {
      const response = await axiosInstance.get<IBookedDay[]>("/bookings/list", {
        params: {
          from: from.format("YYYY-MM-DD"),
          to: to.format("YYYY-MM-DD"),
        },
      });

      if (response) {
        return response.data;
      }
      return null;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  },
};
