import styles from "./card.module.scss";

export interface ICardProps {
  title?: string;
  description?: string;
  link?: string;
}

const CardComponent: React.FC<ICardProps> = ({title, description, link}) => {
  return (
    <div className={styles.card}>
      <section className={styles["card__intro"]}></section>

      <div className={styles["card__meta"]}>
        <div className={styles["card__meta-inner"]}>
          <h3 className={styles["card__title"]}>Some Title</h3>
          <p className={styles["card__text"]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo fugiat ad quae amet dignissimos laborum,
            repellat maxime ipsa ipsam nisi{" "}
            <a href="#" className={styles["card__link"]}>read more ...</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
