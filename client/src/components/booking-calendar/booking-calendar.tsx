import { Calendar } from "antd";
import { bookingCalendarService } from "./booking-calendar.utils";
import React, { useState } from "react";
import type { Dayjs } from 'dayjs';
import { ICreateBooking } from "./booking-calendar-popup/booking-calendar-popup.type";
import BookingCalendarHeader from "./booking-calendar-header/booking-calendar-header";
import BookingCalendarPopup from "./booking-calendar-popup/booking-calendar-popup";

const BookedCalendar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [selectedData, setSelectedData] = useState<ICreateBooking>({ name: '', guests: 2, prepaid: false, note:'', numbersOfDays: 1, bookedDays: 1});
  const onPanelChange = (date: any) => {
    console.log("onPanelChange", date);
  };

  const onSelect = (date: Dayjs) => {
    setSelectedDate(date);
    setOpen(true);
  };

  const handleOk = (data: ICreateBooking) => {
    // Зберігаємо нові дані після редагування
    console.log('Збережено нові дані:', data);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Calendar
        headerRender={(props) => (
          <BookingCalendarHeader value={props.value} onChange={props.onChange} />
        )}
        onPanelChange={onPanelChange}
        onSelect={onSelect}
        cellRender={bookingCalendarService.dateCellRender}
      />
      <BookingCalendarPopup
        open={open}
        data={selectedData}
        handleOk={handleOk}
        handleCloseModal={handleCloseModal}
      >
      </BookingCalendarPopup>
    </>
  );
};

export default BookedCalendar;
