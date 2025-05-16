import dayjs from "dayjs";
import React from "react";
import { IBookedDay } from "../../types/booking.type";
import styles from "./calendar.module.scss";
import Calendar from "react-calendar";
import styled from "styled-components";

interface CalendarComponentProps {
  bookedDays: IBookedDay[];
}


const CalendarComponent: React.FC<CalendarComponentProps> = ({
  bookedDays,
}) => {
  const bookedSet = new Set(
    bookedDays.map((d) => dayjs(d.date).format("YYYY-MM-DD"))
  );
  const todayStr = dayjs().format("YYYY-MM-DD");

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      const dateStr = dayjs(date).format("YYYY-MM-DD");

      if (dateStr <= todayStr || bookedSet.has(dateStr)) {
        return `${styles.redDay} ${styles["cell-calendar"]}`;
      }
    }
    return styles["cell-calendar"];
  };

  return (
    <Calendar
      className={styles.calendar}
      tileClassName={tileClassName}
      selectRange={false}
      onClickDay={() => null}
      navigationLabel={({ date }) => dayjs(date).format("MMMM YYYY")}
      prevLabel={"<"}
      nextLabel={">"}
      showNeighboringMonth={false}
      tileDisabled={() => true}
    />
  );
};

export default CalendarComponent;
