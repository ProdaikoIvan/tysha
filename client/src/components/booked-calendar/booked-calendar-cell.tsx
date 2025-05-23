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

    const isBooked = (date: Dayjs) =>
      dayjs().isAfter(date, "day") || bookedSet.has(date.format("YYYY-MM-DD"));

    if (isBooked(date)) { 
       stylesList = stylesList.concat(" ", styles["full"]);
    }
    /* const prevDay = date.subtract(1, "day");
    const isPrevBooked = isBooked(prevDay);
    if (isBooked(date)) {
      if (isPrevBooked) {
        stylesList = stylesList.concat(" ", styles["full"]); // середина або одиночна
      } else {
        stylesList = stylesList.concat(" ", styles["halfEnd"]); // початок
      }
    } else {
      if (isPrevBooked) {
        stylesList = stylesList.concat(" ", styles["halfStart"]); // кінець
      }
    } */

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
