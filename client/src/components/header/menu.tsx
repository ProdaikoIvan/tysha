import { MenuOutlined } from "@ant-design/icons";
import styles from "./menu.module.scss";
import { IMenuItem } from "./header.adaptor";
import { Link } from "react-scroll";
import logo from "./../../assets/logo.png";

interface IMenuProps {
  menuItems: IMenuItem[];
  toggleMenu: () => void;
}

const MenuComponent: React.FC<IMenuProps> = ({ menuItems, toggleMenu }) => {
  return (
    <>
      <div className={styles["header"]}>
        <div className={styles["header__logo"]}>
          <Link to="startup" spy={true} smooth={true} duration={500}>
            <img className={styles["header__logo--img"]} src={logo} alt="logo" />
          </Link>
        </div>
        <div className={styles["navigation-container"]}>
          <ul className={styles["navigation"]}>
            {menuItems.map((menuItem, index) => {
              return (
                <li key={index} className={styles["navigation__item"]}>
                  <Link
                    to={menuItem.link}
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    {menuItem.title}
                  </Link>
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
