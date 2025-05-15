import { Col, Row } from "antd";
import styles from "./about.module.scss";
import PH5 from "../../assets/img/gallery/Ph-5.webp"

const AboutComponent: React.FC = () => {

  return (
    <div>
      <Row className={styles["container"]}>
        <Col className={styles["image-container"]} xs={24} lg={12}>
          <img className={styles["image-container--img"]} src={PH5} alt="img" />
        </Col>
        <Col className={styles["info-container"]} xs={24} lg={12}>
          <p className={styles["info-container--text"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, et
            veritatis, facere quae neque voluptatem beatae consectetur enim
            autem exercitationem soluta ratione. Perspiciatis, dignissimos
            animi! Magni dicta natus deleniti deserunt! Dolorum aliquam animi
            aut delectus porro. Voluptate doloremque minus vitae beatae dolor
            quaerat et dolorum ad iure labore rerum temporibus expedita nostrum
            amet blanditiis, ipsam repellat fugiat fugit omnis quis. Earum quae
            voluptatum nemo totam eos mollitia eveniet enim veniam alias at
            impedit, adipisci exercitationem hic id, explicabo provident
            voluptatem iure doloremque. Vitae eos aspernatur totam labore ea
            atque consectetur!
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default AboutComponent;
