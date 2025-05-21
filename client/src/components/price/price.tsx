import { Col,  Row } from "antd";
import styles from "./price.module.scss";
import "react-calendar/dist/Calendar.css";
import RuleComponent from "./rule/rule";
import PriceDetailsComponent from "./price-details/price-details";

const PriceComponent: React.FC = () => {
  return (
    <Row gutter={32} className={styles["container"]}>
      <Col className={styles["column"]} xs={24} lg={12}>
        <div className={styles["column__container"]}>
          <h3 className={styles["column__container--header"]}>вартість доби</h3>
          <div className={styles["column__container--content"]}>
            <PriceDetailsComponent></PriceDetailsComponent>
          </div>
        </div>
      </Col>
{/*       <Col className={styles["column"]} xs={24} md={12} lg={8}>
        <div className={styles["column__container"]}>
          <h3 className={styles["column__container--header"]}>вільні дати</h3>
          <div className={styles["column__container--content"]}>
            <CalendarComponent bookedDays={[]}></CalendarComponent>
          </div>
        </div>
      </Col> */}
      <Col className={styles["column"]} xs={24} lg={12}>
        <div className={styles["column__container"]}>
          <h3 className={styles["column__container--header"]}>умови</h3>
          <div className={styles["column__container--content"]}>
            <RuleComponent></RuleComponent>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default PriceComponent;
