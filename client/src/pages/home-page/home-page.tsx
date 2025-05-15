import styles from "./home-page.module.scss";
import PhotoGallery from "../../components/photo-gallery/photo-gallert";
import Header from "./../../components/header/header";
import LocationComponent from "../../components/location/location";
import AboutComponent from "../../components/about/about";
import PriceComponent from "../../components/price/price";
import ContactComponent from "../../components/contact/contact";

const HomePage: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <Header></Header>
      <div className={styles["sector1"]}>
        <div className={styles["logo"]}>
          <h1 className={styles["logo__title"]}>tysha</h1>
          <p className={styles["logo__description"]}>місце вашого відпочинку</p>
        </div>
      </div>
      <section id="photo" className={styles["section"]}>
        <div className={styles["section__container"]}>
          <h3 className={styles["section__container--title"]}>Фото</h3>
          <PhotoGallery></PhotoGallery>
        </div>
      </section>
      
      <section id="price" className={styles["section"]}>
        <div className={styles["section__container"]}>
          <h3 className={styles["section__container--title"]}>Ціни</h3>
          <PriceComponent></PriceComponent>
        </div>
      </section>
      <section id="about" className={styles["section"]}>
        <div className={styles["section__container"]}>
          <h3 className={styles["section__container--title"]}>Про нас</h3>
          <AboutComponent></AboutComponent>
        </div>
      </section>
      <section id="location" className={styles["section"]}>
        <div className={styles["section__container"]}>
          <h3 className={styles["section__container--title"]}>Локація</h3>
          <LocationComponent></LocationComponent>
        </div>
      </section>
      <section id="contact" className={styles["section"]}>
        <div className={styles["section__container"]}>
          <h3 className={styles["section__container--title"]}>Контакт</h3>
          <ContactComponent></ContactComponent>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
