import { Dayjs } from "dayjs";
import { IBooking } from "../../../types/booking.type";
import { useEffect, useState } from "react";
import { BookedDayType, IBookingData } from "../../../types/booking-calendar.type";
import { BookingCalendarAPI } from "../../../services/booking-calendar/booking-calendar.api";
import { BookingCalendarUtils } from "../../../services/booking-calendar/booking-calendar.utils";
import { CalendarStyleService } from "./booking-calendar-style.service";

interface BookingCalendarCellProps {
  value: Dayjs;
  selectedDate: Dayjs;
  bookings: IBooking[];
}

const BookingCalendarCell: React.FC<BookingCalendarCellProps> = ({
  value,
  bookings,
  selectedDate
}) => {
  const [cellData, setCellData] = useState<IBookingData | null>(null);

  useEffect(() => {
    const cellData = BookingCalendarUtils.getCellData(value, bookings);
    
    setCellData(cellData);
  }, [value, bookings]);
  return (
    <div className={CalendarStyleService.getCellClassNames(cellData, value, selectedDate)}>
      <div>{value.date()}</div>
      
    </div>
  );
};

export default BookingCalendarCell;
