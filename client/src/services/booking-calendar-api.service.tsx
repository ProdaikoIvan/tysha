import axios from "axios";
import { IBooking, INewBooking } from "../types/booking.type";

export const BookingCalendarAPIService = {
  async getBookingsByMonth(
    month: number,
    year: number
  ): Promise<IBooking[] | null> {
    try {
      const response = await axios.get<IBooking[]>(
        "http://localhost:3001/bookings/byMonth",
        {
          params: {
            month: month,
            year: year,
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
  async onSaveBooking(data: INewBooking): Promise<INewBooking | null> {
    try {
      const response = await axios.post<INewBooking>(
        "http://localhost:3001/bookings/create",
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
};
