import { Dayjs } from "dayjs";
import { IBooking, INewBooking } from "../types/booking.type";
import axiosInstance from "./api.service";

export const BookingCalendarAPIService = {
  async getBookingsByDateRange(
    from: Dayjs,
    to: Dayjs
  ): Promise<IBooking[] | null> {
    try {
      const response = await axiosInstance.get<IBooking[]>(
        "/bookings/byMonth",
        {
          params: {
            from: from.format('YYYY-MM-DD'),
            to: to.format('YYYY-MM-DD'),
          },
        }
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
  async createBooking(data: INewBooking): Promise<INewBooking | null> {
    try {
      const response = await axiosInstance.post<INewBooking>(
        "/bookings",
        data
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
  
  async updateBooking(id: string, data: INewBooking): Promise<INewBooking | null> {
    try {
      const response = await axiosInstance.put<INewBooking>(
        `/bookings/${id}`,
        data
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
  async deleteBooking(id: string): Promise<INewBooking | null> {
    try {
      const response = await axiosInstance.delete<INewBooking>(
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
