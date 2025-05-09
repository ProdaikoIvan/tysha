import { Dayjs } from "dayjs";
import { IBooking } from "../../../types/booking.type";
import styles from "./booking-calendar-cell.module.scss";
import { useEffect, useState } from "react";
import { bookingCalendarService } from "./booking-calendar.utils";
import { BookedDayType, IBookingData } from "../../../types/booking-calendar.type";
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
    const cellData = bookingCalendarService.getCellData(value, bookings);
    
    setCellData(cellData);
  }, [value, bookings]);
  return (
    <div className={CalendarStyleService.getCellClassNames(cellData, value, selectedDate)}>
      <div>{value.date()}</div>
      <div className="content">
        {cellData && ((cellData.bookedDayType === BookedDayType.singl || cellData.bookedDayType === BookedDayType.start)  && (
          <>
            <p>{cellData.bookedData.name}</p>
            <p>{cellData.bookedData.guests}</p>
          </>
        ))}
      </div>
    </div>
  );
};

export default BookingCalendarCell;
