import { Calendar } from "antd";
import React, { useState } from "react";
import type { Dayjs } from "dayjs";
import BookingCalendarHeader from "./booking-calendar-header/booking-calendar-header";
import { IBooking } from "../../types/booking.type";
import { SelectInfo } from "antd/es/calendar/generateCalendar";
import BookingCalendarCell from "./booking-calendar-cell/booking-calendar-cell";

interface BookedCalendarProps {
  bookings: IBooking[];
  selectedDate: Dayjs;
  onCalendarPanelChange: (date: Dayjs) => void;
  onSelectedDate: (date: Dayjs) => void;
}

const BookedCalendar: React.FC<BookedCalendarProps> = ({ bookings, selectedDate, onCalendarPanelChange, onSelectedDate }) => {
  const onSelect = (date: Dayjs, selectInfo: SelectInfo) => {
    if (selectInfo.source !== "date") {
      return;
    }
    onSelectedDate(date);
  };

  return (
    <>
      <Calendar
        headerRender={(props) => (
          <BookingCalendarHeader
            value={props.value}
            onChange={props.onChange}
          />
        )}
        onPanelChange={onCalendarPanelChange}
        onSelect={onSelect}
        fullscreen={false}
        fullCellRender={(value) => (
          <BookingCalendarCell
            selectedDate={selectedDate}
            value={value}
            bookings={bookings}
          ></BookingCalendarCell>
        )}
      />
    </>
  );
};

export default BookedCalendar;
