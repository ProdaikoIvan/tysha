import styles from "./home-page.module.scss";
import PhotoGallery from "../../components/photo-gallery/photo-gallert";
import Header from "./../../components/header/header";

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
      <section id="photo">
        <PhotoGallery></PhotoGallery>
      </section>
      <section id="about" className={styles["about"]}></section>
      <section className={styles["price"]}></section>
    </div>
  );
};

export default HomePage;
