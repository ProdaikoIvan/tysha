import { useEffect, useState } from "react";
import "dayjs/locale/uk";
import BookedCalendar from "../../components/booking-calendar/booking-calendar";
import { IBooking, INewBooking } from "../../types/booking.type";
import { Col, message, Row } from "antd";
import BookingInfo from "../../components/booking-info/booking-info";
import dayjs, { Dayjs } from "dayjs";
import { Typography } from "antd";
import { BookingCalendarAPIService } from "../../services/booking-calendar-api.service";

const BookingsCalendarPage: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const key = "createBooking";
  const [bookings, setBookings] = useState<IBooking[]>([]);
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [selectedData, setSelectedData] = useState<INewBooking>({
    name: "",
    guests: 2,
    prepaid: false,
    note: "",
    bookedDays: 1,
  });

  const getBookingsByMonth = async (month: number, year: number) => {
    const responce = await BookingCalendarAPIService.getBookingsByMonth(
      month,
      year
    );
    if (responce) {
      setBookings(responce);
    }
  };

  const onSaveBooking = async (data: INewBooking) => {
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    const responce = await BookingCalendarAPIService.onSaveBooking(data);
    if (responce) {
      messageApi.open({
        key,
        type: "success",
        content: "Loaded!",
        duration: 2,
      });
    }
  };


  const onCancelationBooking = () => {
    console.log("onCancelationBooking");
  };

  const onSelectedDate = (date: Dayjs): void => {
    console.log(' onSelectedDate', date);
    setSelectedDate(date);
  };

  const onCalendarPanelChange = (date: Dayjs) => {
    getBookingsByMonth(date.month() + 1, date.year());
  };

  useEffect(() => {
    const today = new Date();
    const currentMonth = today.getMonth() + 1; // getMonth() повертає місяць від 0 до 11, тому додаємо 1
    const currentYear = today.getFullYear();
    getBookingsByMonth(currentMonth, currentYear);
  }, []);

  return (
    <>
      {contextHolder}
      <Row gutter={16} style={{ padding: 16 }}>
        <Col span={12}>
          <BookedCalendar
            onCalendarPanelChange={onCalendarPanelChange}
            bookings={bookings}
            selectedDate={selectedDate}
            onSelectedDate={onSelectedDate}
          ></BookedCalendar>
        </Col>
        <Col span={12}>
          <Typography.Title level={4} style={{ textAlign: "center" }}>
            {selectedDate?.format("D MMMM YYYY")}
          </Typography.Title>
          <BookingInfo
            data={selectedData}
            selectedDate={selectedDate}
            onSaveBooking={onSaveBooking}
            onCancelationBooking={onCancelationBooking}
          ></BookingInfo>
        </Col>
      </Row>
    </>
  );
};

export default BookingsCalendarPage;
