import { MenuOutlined } from "@ant-design/icons";
import styles from "./menu.module.scss";
import { IMenuItem } from "./header.adaptor";

interface IMenuProps {
  menuItems: IMenuItem[];
  toggleMenu: () => void;
}

const MenuComponent: React.FC<IMenuProps> = ({
  menuItems,
  toggleMenu
}) => {
  return (
    <>
      <div className={styles["header"]}>
          <div className={styles["header__logo"]}>Tysha</div>
          <div className={styles["navigation-container"]}>
            <ul className={styles["navigation"]}>
              {menuItems.map((menuItem, index) => {
                return (
                  <li key={index} className={styles["navigation__item"]}>
                    <a href={`#${menuItem.link}`}>{menuItem.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <button className={styles["burger"]} onClick={toggleMenu}>
            <MenuOutlined />
          </button>
        </div>
    </>
  );
};

export default MenuComponent;
