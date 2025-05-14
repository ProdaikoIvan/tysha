import { Col, Row } from "antd";
import styles from "./location.module.scss";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const LocationComponent: React.FC = () => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return (
    <div>
      <Row className={styles["container"]}>
        <Col className={styles["info-container"]} xs={24} lg={12}>
          <p className={styles["info-container--text"]}>
            Tysha розташована Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Accusantium consequuntur in eos amet, libero commodi a nulla,
            natus sit eum corrupti dolore minima repellat inventore ipsa eveniet
            nostrum tempore veniam. Praesentium natus nihil quas veritatis
            porro, incidunt iure fuga quasi obcaecati cum eveniet atque
            quibusdam recusandae debitis corrupti sint non veniam eos doloribus
            voluptates mollitia saepe repudiandae. Excepturi, doloribus ducimus.
            Numquam fuga voluptatibus labore iusto libero voluptas adipisci,
            quaerat vel error, deleniti perferendis eos eligendi blanditiis,
            facere ratione nobis consequatur molestias odit ut pariatur. Tempora
            sapiente quaerat mollitia architecto eum!
          </p>
        </Col>
        <Col className={styles["map-container"]} xs={24} lg={12}>
          <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
              mapContainerStyle={{
                width: "100%",
                minHeight: "400px",
              }}
              center={{
                lat: 49.637585,
                lng: 34.607639,
              }}
              zoom={14}
              options={{
                mapTypeId: "roadmap"
              }}
            >
              <Marker
                position={{
                  lat: 49.637585,
                  lng: 34.607639,
                }}
              />
            </GoogleMap>
          </LoadScript>
        </Col>
      </Row>
    </div>
  );
};

export default LocationComponent;
