import { IButton } from "@/types";
import Link from "next/link";
import React from "react";
import styles from "./page.module.scss";

const Button = ({ link, children, className }: IButton) => {
  return (
    <>
      {link ? (
        <Link className={`${styles.btn} ${className}`} href={link}>
          {children}
        </Link>
      ) : (
        <button className={`${styles.btn} ${className}`} type="button">
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
