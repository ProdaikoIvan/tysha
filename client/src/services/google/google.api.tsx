import dayjs, { Dayjs } from "dayjs";
import { IBookedDay } from "../../types/booking.type";
import axiosInstance from "../api.service";

export const GoogleAPI = {
  async getBookedDays(): Promise<any> {
    try {
      const response = await axiosInstance.get<any>("/google/get-booked-days");

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
