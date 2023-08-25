import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";

const Grid = ({ headline, text }) => {
  return (
    <section className={styles.grid}>
      <div className={styles.grid__ImgWrapper}>
        <Image
          src={"/images/img.jpg"}
          fill
          style={{ objectFit: "cover" }}
          alt=""
        />
      </div>
      <h2 className={styles.grid__title}>{headline}</h2>
      <p className={styles.grid__text}>{text}</p>
    </section>
  );
};

export default Grid;
