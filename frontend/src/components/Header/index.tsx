import React from "react";
import styles from "./page.module.scss";
import Link from "next/link";

const links = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "about",
    href: "/about",
  },
  {
    name: "articles",
    href: "/articles",
  },
];

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.header__logo} href={"/"}>
        Psychos
      </Link>
      <nav className={styles.header__nav}>
        <ul className={styles.header__menu}>
          {links.map(({ name, href }) => (
            <li className={styles.header__menuItem} key={name}>
              <Link className={styles.header__menuLink} href={href}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
