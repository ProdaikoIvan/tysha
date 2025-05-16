import { useEffect, useState } from "react";
import "dayjs/locale/uk";
import BookedCalendar from "../../components/booking-calendar/booking-calendar";
import { IBooking } from "../../types/booking.type";
import { Col, Row } from "antd";
import BookingInfo from "../../components/booking-info/booking-info";
import dayjs, { Dayjs } from "dayjs";
import { Typography } from "antd";
import { BookingCalendarAdminAPI } from "../../services/booking-calendar/booking-calendar-admin.api";
import { BookingCalendarUtils } from "../../services/booking-calendar/booking-calendar.utils";

const BookingsCalendarPage: React.FC = () => {
  const [bookings, setBookings] = useState<IBooking[]>([]);
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [selectedBookedData, setSelectedBooketData] = useState<IBooking>();

  const onSaveBooking = async (data: IBooking) => {
    const responce = data.id
      ? await BookingCalendarAdminAPI.updateBooking(data.id, data)
      : await BookingCalendarAdminAPI.createBooking(data);

    if (responce) {
      loadData();
    }
  };

  const onDeleteBooking = async (id: string) => {
    const responce = await BookingCalendarAdminAPI.deleteBooking(id);

    if (responce) {
      loadData();
    }
  };

  const onSelectedDate = (date: Dayjs): void => {
    setSelectedDate(date);
  };

  const onCalendarPanelChange = (date: Dayjs) => {
    setSelectedDate(date);
  };

  const loadData = async () => {
    const from = selectedDate.subtract(1, "month").startOf("month");
    const to = selectedDate.add(1, "month").endOf("month");
    const responce = await BookingCalendarAdminAPI.getBookingsByDateRange(
      from,
      to
    );
    if (responce) {
      setBookings(responce);
    }
  };

  useEffect(() => {
    const bookingData = BookingCalendarUtils.getBookedData(
      selectedDate,
      bookings
    );
    const bookedData = bookingData
      ? bookingData
      : BookingCalendarUtils.getInitialBookingData(selectedDate);
    setSelectedBooketData(bookedData);
  }, [selectedDate, bookings]);

  useEffect(() => {
    loadData();
  }, [selectedDate]);

  return (
    <>
      <Row style={{ padding: 16 }}>
        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
          <BookedCalendar
            onCalendarPanelChange={onCalendarPanelChange}
            bookings={bookings}
            selectedDate={selectedDate}
            onSelectedDate={onSelectedDate}
          ></BookedCalendar>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
          <Typography.Title level={4} style={{ textAlign: "center" }}>
            {selectedDate?.format("D MMMM YYYY")}
          </Typography.Title>

          {selectedBookedData && (
            <BookingInfo
              data={selectedBookedData}
              selectedDate={selectedDate}
              onSaveBooking={onSaveBooking}
              onDeleteBooking={onDeleteBooking}
            ></BookingInfo>
          )}
        </Col>
      </Row>
    </>
  );
};

export default BookingsCalendarPage;
