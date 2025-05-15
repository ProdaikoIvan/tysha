import { Dayjs } from "dayjs";
import { IBooking, IBookingDpo } from "../../types/booking.type";
import axiosInstance from "../api.service";
import { BookingCalendarAdaptor } from "./booking-calendar.adapter";

export const BookingCalendarAPI = {
  async getBookingsByDateRange(
    from: Dayjs,
    to: Dayjs
  ): Promise<IBooking[] | null> {
    try {
      const response = await axiosInstance.get<IBookingDpo[]>(
        "/bookings/byMonth",
        {
          params: {
            from: from.format('YYYY-MM-DD'),
            to: to.format('YYYY-MM-DD'),
          },
        }
      );

      if (response.data) {
        return BookingCalendarAdaptor.transformListFromDPO(response.data);
      } else {
        console.error("Failed to fetch data");
        return null;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  },
  async createBooking(data: IBooking): Promise<IBooking | null> {
    try {
      const response = await axiosInstance.post<IBooking>(
        "/bookings",
        BookingCalendarAdaptor.transformToDPO(data)
      );

      if (response.data) {
        return response.data;
      } else {
        console.error("Failed to fetch data");
        return null;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  },
  
  async updateBooking(id: string, data: IBooking): Promise<IBooking | null> {
    try {
      const response = await axiosInstance.put<IBooking>(
        `/bookings/${id}`,
        BookingCalendarAdaptor.transformToDPO(data)
      );

      if (response.data) {
        return response.data;
      } else {
        console.error("Failed to fetch data");
        return null;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  },
  
  async deleteBooking(id: string): Promise<IBooking | null> {
    try {
      const response = await axiosInstance.delete<IBooking>(
        `/bookings/${id}`);

      if (response.data) {
        return response.data;
      } else {
        console.error("Failed to fetch data");
        return null;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  },
};
