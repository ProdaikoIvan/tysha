import { useEffect } from "react";
import dayjs from 'dayjs';
import 'dayjs/locale/uk';
import localeData from 'dayjs/plugin/localeData';
import BookedCalendar from "../../components/booking-calendar/booking-calendar";

dayjs.extend(localeData);
dayjs.locale('uk');

const BookingsCalendarPage: React.FC = () => {
  const getAllBookings = async () => {
    try {
      const response = await fetch("http://localhost:3001/bookings/all");
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Запит до бекенду NestJS
    getAllBookings();
  }, []);

  return (
    <BookedCalendar></BookedCalendar>
  );
};

export default BookingsCalendarPage;