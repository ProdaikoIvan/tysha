import { Col, Row } from "antd";
import styles from "./about.module.scss";
import CustomListComponent from "../custom-list/custom-list";
import { AboutAdapterService } from "./about.adapter";

const AboutComponent: React.FC = () => {
  return (
    <div>
      <Row gutter={16} className={styles["container"]}>
        <Col className={styles["info-container"]} xs={24} lg={12}>
          <div className={styles["info-container__item"]}>
            Затишний будиночок у самому серці соснового лісу розташований у
            місті Полтава для повноцінного відпочинку на природі.. Тут панує
            тиша, свіже повітря та затишок — усе, що потрібно для повного
            перезавантаження. На території: зелений доглянутий газон, купіль під
            відкритим небом, мангал для вечірніх посиденьок і атмосфера
            справжнього відпочинку. Це ідеальне місце для тих, хто мріє втекти
            від міського шуму й зануритися в природу, не жертвуючи комфортом.
          </div>
        </Col>
        <Col className={styles["info-container"]} xs={24} lg={12}>
          <CustomListComponent
            items={AboutAdapterService.getItems()}
            type="dark"
          ></CustomListComponent>
        </Col>
      </Row>
    </div>
  );
};

export default AboutComponent;
