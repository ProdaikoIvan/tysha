import styles from "./header.module.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles["header"]} ${scrolled && styles["header__scrolled"]}`}>
        <div className={styles["header__container"]}>
          <div className={styles["header__logo"]}>Tysha</div>
          <div className={styles["navigation-container"]}>
            <ul className={styles["navigation"]}>
              <li className={styles["navigation__item"]}><a href="#photo">фото</a></li>
              <li className={styles["navigation__item"]}><a href="#price">ціни</a></li>
              <li className={styles["navigation__item"]}><a href="#about">про нас</a></li>
              <li className={styles["navigation__item"]}><a href="#location">Локація</a></li>
              <li className={styles["navigation__item"]}><a href="#contact">Контакти</a></li>
              <li className={styles["navigation__item"]}>
                <Link to="/booking">Календар</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
  );
};

export default Header;
