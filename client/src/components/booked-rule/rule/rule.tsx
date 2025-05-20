import { List } from "antd";
import styles from "./rule.module.scss";
import "react-calendar/dist/Calendar.css";
import { BorderlessTableOutlined } from "@ant-design/icons";

const RuleComponent: React.FC = () => {
  const descriptionList = [
    "Бронювання вихідного дня можливе лише на 2 доби ПТ та СБ або СБ та НД",
    "Купель входить у вартість оренди будинку",
    "На ночівлю дозволено перебування до 4-х осіб. Вдень відпочивати до 6 осіб (у разі більшої кількості – умови обговорюються індивідуально)",
    "За перебування понад 4-х осіб вдень передбачена доплата- 500 грн за кожного додаткового гостя",
  ];
  return (
    <List
      size="large"
      dataSource={descriptionList}
      renderItem={(item) => (
        <List.Item>
          <BorderlessTableOutlined />
          <List.Item.Meta
            className={styles["price-description"]}
            description={item}
          />
        </List.Item>
      )}
    />
  );
};

export default RuleComponent;
