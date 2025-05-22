import { style } from "@mui/system";
import {
  CustomListItemIconType,
  CustomListType,
  ICustomListItem,
} from "../../types/custom-list.type";
import styles from "./custom-list.module.scss";

interface ICustomListProps {
  items: ICustomListItem[];
  type?: CustomListType;
}

const CustomListComponent: React.FC<ICustomListProps> = ({
  items,
  type = "dark",
}) => {
  const getIconClassByType = (iconType?: CustomListItemIconType): string => {
    let classes = `${styles["list-container__item--icon"]}`;

    if (iconType) {
      switch (iconType) {
        case CustomListItemIconType.SUCCESS:
          classes = classes.concat(" ", `${styles["success"]}`);
          break;
        case CustomListItemIconType.INFO:
          classes = classes.concat(" ", `${styles["info"]}`);
          break;
        case CustomListItemIconType.WARNING:
          classes = classes.concat(" ", `${styles["warning"]}`);
          break;
        case CustomListItemIconType.ERROR:
          classes = classes.concat(" ", `${styles["error"]}`);
          break;
      }
    }

    return classes;
  };

  const getTextClassByType = (): string => {
    let classes = `${styles["list-container__item--text"]}`;

    switch (type) {
      case "light":
        classes = classes.concat(" ", `${styles["dark"]}`);
        break;
      case "dark":
        classes = classes.concat(" ", `${styles["light"]}`);
        break;
    }
    console.log(classes);
    return classes;
  };

  return (
    <div className={styles["list-container"]}>
      {items.map((item, index) => {
        return (
          <div key={index} className={styles["list-container__item"]}>
            {item.icon && (
              <p className={getIconClassByType(item.icon.iconType)}>
                {item.icon.icon}
              </p>
            )}
            <p className={getTextClassByType()}>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CustomListComponent;
