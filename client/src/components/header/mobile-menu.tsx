import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import styles from "./mobile-menu.module.scss";
import { IMenuItem } from "./header.adaptor";

interface MobileMenuProps {
  menuItems: IMenuItem[];
  menuOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenuComponent: React.FC<MobileMenuProps> = ({
  menuItems,
  menuOpen,
  toggleMenu,
}) => {
  return (
    <>
      <div className={`${styles["mobile-menu"]} ${menuOpen && styles["mobile-menu--open"]}`}>
        <div className={styles["header"]}>
          <div className={styles["header__logo"]}>Tysha</div>
          <button className={styles["mobile-menu__close"]} onClick={toggleMenu}>
            <CloseOutlined />
          </button>
        </div>

        <ul className={styles["mobile-menu__list"]}>
          {menuItems.map((menuItem, index) => {
            return (
              <li key={index}>
                <a href={`#${menuItem.link}`} onClick={toggleMenu}>
                  {menuItem.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MobileMenuComponent;
