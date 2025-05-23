import dayjs, { Dayjs } from "dayjs";
import styles from "./booked-calendar-header.module.scss";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

interface IBookedCalendarHeaderComponentProps {
  value: Dayjs;
  onNext: () => void;
  onPrevious: () => void;
}
console.log(styles)
const BookedCalendarHeaderComponent: React.FC<
  IBookedCalendarHeaderComponentProps
> = ({ value, onNext, onPrevious }) => {
  const getStylePrevButton = (): string => {
    let styleList = `${styles["button"]}`;

    if (dayjs().isSameOrAfter(value)) {
      styleList = styleList.concat(" ", `${styles["disabled"]}`);
    }

    return styleList;
  };

  return (
    <div className={styles["header-container"]}>
      <div className={getStylePrevButton()} onClick={onPrevious}>
        <LeftOutlined />
      </div>
      <div className={styles["title"]}>{value.format("MMMM YYYY")}</div>
      <div className={styles["button"]} onClick={onNext}>
        <RightOutlined />
      </div>
    </div>
  );
};

export default BookedCalendarHeaderComponent;
