import styles from "./header.module.scss";
import { useEffect, useState } from "react";
import MobileMenuComponent from "./mobile-menu";
import { HeaderAdaptor, IMenuItem } from "./header.adaptor";
import MenuComponent from "./menu";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuItems, setMenuItems] = useState<IMenuItem[]>(
    HeaderAdaptor.getMenuItems()
  );

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`${styles["header"]} ${
          scrolled && styles["header__scrolled"]
        }`}
      >
        <MenuComponent
          menuItems={menuItems}
          toggleMenu={toggleMenu}
        ></MenuComponent>
      </header>
      <MobileMenuComponent
        menuItems={menuItems}
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
      ></MobileMenuComponent>
    </>
  );
};

export default Header;
