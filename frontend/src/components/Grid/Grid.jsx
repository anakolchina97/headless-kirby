import React from "react";
import styles from "./Grid.module.scss";
import Image from "next/image";

const Grid = () => {
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
      <h2 className={styles.grid__title}>What is Lorem Ipsum?</h2>
      <p className={styles.grid__text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </section>
  );
};

export default Grid;
