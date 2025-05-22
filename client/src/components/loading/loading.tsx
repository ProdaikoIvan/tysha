import { useEffect, useState } from "react";
import styles from "./loading.module.scss";
import logo from "./../../assets/logo.png";
interface ILoadingProps {
  isVisible?: boolean;
}
const LoadingComponent: React.FC<ILoadingProps> = ({ isVisible }) => {
  const [canHide, setCanHide] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!isVisible && canHide) {
      setFadeOut(true);
      const timeout = setTimeout(() => setHidden(true), 1000); // час fadeOut анімації
      return () => clearTimeout(timeout);
    }
  }, [canHide, isVisible]);

  useEffect(() => {
    const delay = setTimeout(() => setCanHide(true), 3000);
    return () => clearTimeout(delay);
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`${styles["loading-container"]} ${fadeOut && styles["fadeOut"]}`}>
      <div
        className={`${styles["loading"]} ${fadeOut && styles["fadeOut"]}`}>
        <img className={styles["loading--img"]} src={logo} alt="logo" />
        <div className={styles["loading--text"]}>місце вашого відпочинку</div>
      </div>
    </div>
  );
};

export default LoadingComponent;
