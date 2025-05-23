import { Col, Row } from "antd";
import BookedCalendarComponent from "../booked-calendar/booked-calendar";
import styles from "./contact.module.scss";
import CustomListComponent from "../custom-list/custom-list";
import { ContactAdapterService } from "./contact.adapter";

interface IContactComponentProps {
  bookedDays: string[];
}

const ContactComponent: React.FC<IContactComponentProps> = ({ bookedDays }) => {
  return (
    <div>
      <Row gutter={32} className={styles["container"]}>
        <Col className={styles["column"]} xs={24} lg={12}>
          <BookedCalendarComponent
            bookedDays={bookedDays}
          ></BookedCalendarComponent>
        </Col>
        <Col className={styles["column"]} xs={24} lg={12}>
          <CustomListComponent
            items={ContactAdapterService.getItems()}
          ></CustomListComponent>
        </Col>
      </Row>
    </div>
  );
};

export default ContactComponent;
