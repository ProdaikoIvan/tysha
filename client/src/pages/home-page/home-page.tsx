import styles from "./home-page.module.scss";
import PhotoGallery from "../../components/photo-gallery/photo-gallert";
import Header from "./../../components/header/header";
import LocationComponent from "../../components/location/location";
import AboutComponent from "../../components/about/about";
import PriceComponent from "../../components/booked-rule/booked-rule";
import ContactComponent from "../../components/contact/contact";
import { useEffect, useState } from "react";
import { BookingCalendarAPI } from "../../services/booking-calendar/booking-calendar.api";
import dayjs from "dayjs";
import { IBookedDay } from "../../types/booking.type";
import StartupComponent from "../../components/startup/startup";
import LoadingComponent from "../../components/loading/loading";

const HomePage: React.FC = () => {
  const [bookedDays, setBookedDays] = useState<IBookedDay[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const loadBookedDates = async () => {
    const from = dayjs(new Date()).subtract(1, "month").startOf("month");
    const to = dayjs(new Date()).add(1, "month").endOf("month");
    const dates = await BookingCalendarAPI.getBookedDays(from, to);

    if (dates) {
      setBookedDays(dates);
    }
  };

  useEffect(() => {
    const handleLoad = () => {
      // setIsLoaded(true);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
    // loadBookedDates();
  }, []);
  return (
    <>
      <LoadingComponent isVisible={!isLoaded}></LoadingComponent>
      {isLoaded && (
        <div className={styles["container"]}>
          <Header></Header>
          <StartupComponent></StartupComponent>
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
      )}
    </>
  );
};

export default HomePage;
