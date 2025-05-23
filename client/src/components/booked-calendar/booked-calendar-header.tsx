import { Dayjs } from "dayjs";
import styles from "./booked-calendar-header.module.scss";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

interface IBookedCalendarHeaderComponentProps {
  date: Dayjs;
  onNext: () => void;
  onPrevious: () => void;
}

const BookedCalendarHeaderComponent: React.FC<
  IBookedCalendarHeaderComponentProps
> = ({ date, onNext, onPrevious }) => {
  return (
    <div className={styles["header-container"]}>
      <div className={styles["button"]} onClick={onPrevious}><LeftOutlined /></div>
      <div className={styles["title"]}>{date.format("MMMM YYYY")}</div>
      <div className={styles["button"]} onClick={onNext}><RightOutlined /></div>
    </div>
  );
};

export default BookedCalendarHeaderComponent;
