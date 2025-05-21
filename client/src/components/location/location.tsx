import { Col, Row } from "antd";
import styles from "./location.module.scss";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import RouteIcon from "@mui/icons-material/Route";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import CheckIcon from "@mui/icons-material/Check";
import ForestIcon from "@mui/icons-material/Forest";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const LocationComponent: React.FC = () => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return (
    <div>
      <Row className={styles["container"]}>
        <Col className={styles["info-container"]} xs={24} lg={12}>
          <div className={styles["info-container__item"]}>
            <DirectionsCarIcon className={`${styles["info-container__item--icon"]} ${styles["blue"]}`} />
            <p className={styles["info-container__item--text"]}>
              Будиночок розташований посеред соснового лісу в
              мікрорайоні Вакуленці, приблизно за 500 метрів від Вакуленцівської
              греблі.
            </p>
          </div>
          <div className={styles["info-container__item"]}>
            <RouteIcon className={`${styles["info-container__item--icon"]} ${styles["blue"]}`} />
            <p className={styles["info-container__item--text"]}>
              Відстань від центру Полтави — близько 17 хвилин на авто, або
              приблизно 12 хвилин від Південного вокзалу.
            </p>
          </div>
          <div className={styles["info-container__item"]}>
            <PriorityHighIcon
              className={`${styles["info-container__item--icon"]}  ${styles["red"]}`}
            />
            <p className={styles["info-container__item--text"]}>
              Увага! Рекомендуємо прокладати маршрут саме до Вакуленцівської
              греблі, оскільки Google Навігатор іноді пропонує шлях через погану
              ґрунтову дорогу, що може бути незручною, особливо після дощу.
            </p>
          </div>
          <div className={styles["info-container__item"]}>
            <CheckIcon className={`${styles["info-container__item--icon"]} ${styles["green"]}`}/>
            <p className={styles["info-container__item--text"]}>
              Дорога до будиночка підходить для легкових автомобілів у будь-яку
              пору року — як взимку, так і влітку.
            </p>
          </div>
          <div className={styles["info-container__item"]}>
            <ForestIcon className={`${styles["info-container__item--icon"]} ${styles["green"]}`} />
            <p className={styles["info-container__item--text"]}>
              А вже через декілька хвилин після заїзду вас зустріне затишна
              атмосфера лісу, спів птахів і відчуття повного відпочинку.
            </p>
          </div>
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
