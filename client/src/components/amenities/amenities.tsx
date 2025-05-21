import { Col, List, Row } from "antd";
import styles from "./amenities.module.scss";
import { BorderlessTableOutlined } from "@ant-design/icons";

const AmenitiesComponent: React.FC = () => {
  const houseDescriptionList = [
    "Обладнана міні-кухня індукційна плита, електрочайник, мікрохвильова піч, однокамерний холодильник, столовий посуд та келихи на 4 осіб, приладдя для приготування їжі",
    "Окрема кімната з великим двоспальним ліжком та виходом на терасу",
    "Лаунж зона з розкладним диваном",
    "Netflix - для перегляду улюблених фільмів, настільні ігри, чай та кава",
  ];

  const yardDescriptionList = [
    "Тераса обладнана для ваших посиденьок з близькими також маємо додатковий розкладний стіл, який можна використовувати на терасі",
    "Купель із вбудованою системою гідромасажу та світлодіодним підводним освітленням",
    "Мангальна зона, дрова, решітка та шампура- входять у вартість",
    "Зона костровища зі зручними кріслами",
  ];
  return (
    <div>
      <Row gutter={16} className={styles["container"]}>
        <Col xs={24} lg={12}>
          <div className={styles["amenities-container"]}>
            <h4 className={styles["amenities-title"]}>В БУДИНОЧКУ</h4>
            <div className={styles["amenities-content"]}>
              <List
                size="large"
                dataSource={houseDescriptionList}
                renderItem={(item) => (
                  <List.Item>
                    <BorderlessTableOutlined />
                    <List.Item.Meta
                      className={styles["content-description"]}
                      description={item}
                    />
                  </List.Item>
                )}
              />
            </div>
          </div>
        </Col>
        <Col className={styles["info-container"]} xs={24} lg={12}>
          <div className={styles["amenities-container"]}>
            <h4 className={styles["amenities-title"]}>на території</h4>
            <div className={styles["amenities-content"]}>
              <List
                size="large"
                dataSource={yardDescriptionList}
                renderItem={(item) => (
                  <List.Item>
                    <BorderlessTableOutlined />
                    <List.Item.Meta
                      className={styles["content-description"]}
                      description={item}
                    />
                  </List.Item>
                )}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AmenitiesComponent;
