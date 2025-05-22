import { Col, Row } from "antd";
import styles from "./location.module.scss";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import CustomListComponent from "../custom-list/custom-list";
import { LocationAdapterService } from "./location.adapter";

const LocationComponent: React.FC = () => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return (
    <div>
      <Row className={styles["container"]}>
        <Col className={styles["info-container"]} xs={24} lg={12}>
          <CustomListComponent items={LocationAdapterService.getItems()} type="light"></CustomListComponent>
        </Col>
        <Col className={styles["map-container"]} xs={24} lg={12}>
          <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
              mapContainerStyle={{
                width: "100%",
                height: "100%",
              }}
              center={{
                lat: 49.637585,
                lng: 34.607639,
              }}
              zoom={14}
              options={{
                mapTypeId: "roadmap",
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
