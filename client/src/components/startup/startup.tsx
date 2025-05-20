import styles from "./startup.module.scss";
import "react-calendar/dist/Calendar.css";
import { useEffect, useState } from "react";

const StartupComponent: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  const dynamicStyle = {
    backgroundPositionY: `-${offsetY * 0.1}px`,
  };

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles["startup"]} style={dynamicStyle}>
      <div className={styles["logo"]}>
        <h1 className={styles["logo__title"]}>tysha</h1>
        <p className={styles["logo__description"]}>місце вашого <br/>відпочинку</p>
      </div>
    </div>
  );
};

export default StartupComponent;
