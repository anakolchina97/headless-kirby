import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.header__logo}>Headless</p>
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
            <Link className={styles.header__menuLink} href={"/blog"}>
              blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
