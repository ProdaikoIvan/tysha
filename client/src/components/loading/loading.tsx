import { useEffect, useState } from "react";
import styles from "./loading.module.scss";
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
      const timeout = setTimeout(() => setHidden(true), 600); // час fadeOut анімації
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
      className={`${styles["loading-container"]} ${fadeOut && styles.fadeOut}`}
    >
      <div
        className={`${styles["loading"]} ${fadeOut && styles["fadeOut"]}`}
        data-text="ТИША"
      >
        ТИША
      </div>
    </div>
  );
};

export default LoadingComponent;
