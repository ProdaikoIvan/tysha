import dayjs, { Dayjs } from "dayjs";
import styles from "./booked-calendar-cell.module.scss";
import { MouseEventHandler } from "react";

interface IBookedCalendarCellComponentProps {
  date: Dayjs;
  value: Dayjs;
  bookedDays: string[];
}

const BookedCalendarCellComponent: React.FC<
  IBookedCalendarCellComponentProps
> = ({ date, value, bookedDays }) => {
  const bookedSet = new Set(bookedDays);

  const getStyle = () => {
    let stylesList = `${styles["cell"]}`;

    const isBooked = (date: Dayjs) =>  bookedSet.has(date.format("YYYY-MM-DD"));

    const isPrevData = (date: Dayjs) => dayjs().isAfter(date, "day");

    if (isBooked(date)) { 
       stylesList = stylesList.concat(" ", styles["full"]);
    }

    if (isPrevData(date)) {
      stylesList = stylesList.concat(" ", styles["prev-date"]);
    }

    return stylesList;
  };

  const onCellClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const isCurrentMonth = (): boolean => {
    return value.isSame(date, "month");
  };

  return isCurrentMonth() ? (
    <div className={styles["cell-container"]} onClick={onCellClick}>
      <div className={getStyle()}>{date.date()}</div>
    </div>
  ) : null;
};

export default BookedCalendarCellComponent;
