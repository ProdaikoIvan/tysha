import styles from "./price-details.module.scss";
import "react-calendar/dist/Calendar.css";

const PriceDetailsComponent: React.FC = () => {
  return (
    <div className={styles["price-container"]}>
      <h4 className={styles["price-title"]}>Пн, Вт, Ср, Чт</h4>
      <div className={styles["price-content"]}>
        <div className={styles["content-container"]}>
          <p>1-2 особи</p>
          <p>5000грн</p>
        </div>
      </div>
      <div className={styles["price-content"]}>
        <div className={styles["content-container"]}>
          <p>3-4 особи</p>
          <p>6000грн</p>
        </div>
      </div>
      <h4 className={styles["price-title"]}>Пт, Сб, Нд</h4>
      <div className={styles["price-content"]}>
        <div className={styles["content-container"]}>
          <p>1-2 особи</p>
          <p>5700грн</p>
        </div>
      </div>
      <div className={styles["price-content"]}>
        <div className={styles["content-container"]}>
          <p>3-4 особи</p>
          <p>6700грн</p>
        </div>
      </div>
    </div>
  );
};

export default PriceDetailsComponent;
