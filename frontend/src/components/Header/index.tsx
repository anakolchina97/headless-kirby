import React from "react";
import styles from "./page.module.scss";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.header__logo} href={"/"}>
        Psychos
      </Link>
      <nav className={styles.header__nav}>
        <ul className={styles.header__menu}>
          <li className={styles.header__menuItem}>
            <Link className={styles.header__menuLink} href={"/"}>
              home
            </Link>
          </li>
          <li className={styles.header__menuItem}>
            <Link className={styles.header__menuLink} href={"/about"}>
              about
            </Link>
          </li>
          <li className={styles.header__menuItem}>
            <Link className={styles.header__menuLink} href={"/articles"}>
              articles
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
