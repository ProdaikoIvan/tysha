import { Col, Row } from "antd";
import { IBookedDay } from "../../types/booking.type";
import styles from "./price.module.scss";
import "react-calendar/dist/Calendar.css";
import CalendarComponent from "../calendar/calendar";

interface IPriceProps {
  bookedDays: IBookedDay[];
}

const PriceComponent: React.FC<IPriceProps> = ({ bookedDays }) => {
  
  return (
    <Row className={styles["container"]}>
      <Col className={styles["price-container"]} xs={24} lg={24}>
        <p className={styles["price-container--text"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, et
          veritatis, facere quae neque voluptatem beatae consectetur enim autem
          exercitationem soluta ratione. Perspiciatis, dignissimos animi! Magni
          dicta natus deleniti deserunt! Dolorum aliquam animi aut delectus
          porro. Voluptate doloremque minus vitae beatae dolor quaerat et
          dolorum ad iure labore rerum temporibus expedita nostrum amet
          blanditiis, ipsam repellat fugiat fugit omnis quis. Earum quae
          voluptatum nemo totam eos mollitia eveniet enim veniam alias at
          impedit, adipisci exercitationem hic id, explicabo provident
          voluptatem iure doloremque. Vitae eos aspernatur totam labore ea atque
          consectetur!
        </p>
      </Col>
      {/* <Col className={styles["calendar-container"]} xs={24} lg={12}>
        <CalendarComponent bookedDays={bookedDays}/>
      </Col> */}
    </Row>
  );
};

export default PriceComponent;
