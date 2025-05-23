import dayjs, { Dayjs } from "dayjs";
import React, { useRef, useState } from "react";
import styles from "./booked-calendar.module.scss";
import { Calendar } from "antd";
import BookedCalendarCellComponent from "./booked-calendar-cell";
import BookedCalendarHeaderComponent from "./booked-calendar-header";

interface BookedCalendarComponentProps {
  bookedDays: string[];
}

const BookedCalendarComponent: React.FC<BookedCalendarComponentProps> = ({
  bookedDays,
}) => {
  const [value, setValue] = useState(dayjs().startOf("month"));
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const onNext = () => {
    setValue((prev) => prev.add(1, "month"));
  };

  const onPrevioust = () => {
    setValue((prev) => prev.subtract(1, "month"));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;

    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          onNext();
        } else {
          onPrevioust();
        }
      }

      touchStartX.current = null;
      touchEndX.current = null;
    }
  };

  return (
    <div
      className={styles["calendar-container"]}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Calendar
        mode="month"
        value={value}
        className={styles["calendar"]}
        fullscreen={false}
        headerRender={(props) => (
          <BookedCalendarHeaderComponent
            onPrevious={onPrevioust}
            onNext={onNext}
            date={props.value}
          />
        )}
        fullCellRender={(date: Dayjs, info) => (
          <BookedCalendarCellComponent
            date={date}
            value={value}
            bookedDays={bookedDays}
          />
        )}
      />
    </div>
  );
};

export default BookedCalendarComponent;
