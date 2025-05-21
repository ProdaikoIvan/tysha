import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import styles from "./mobile-menu.module.scss";
import { IMenuItem } from "./header.adaptor";
import { Link } from "react-scroll";
import logo from "./../../assets/logo.png";

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
      <div
        className={`${styles["mobile-menu"]} ${
          menuOpen && styles["mobile-menu--open"]
        }`}
      >
        <div className={styles["header"]}>
          <div className={styles["header__logo"]}>
            <img
              className={styles["header__logo--img"]}
              src={logo}
              alt="logo"
            />
          </div>
          <button className={styles["mobile-menu__close"]} onClick={toggleMenu}>
            <CloseOutlined />
          </button>
        </div>

        <ul className={styles["mobile-menu__list"]}>
          {menuItems.map((menuItem, index) => {
            return (
              <li key={index}>
                <Link
                  to={menuItem.link}
                  delay={500}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                >
                  {menuItem.title}{" "}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MobileMenuComponent;
