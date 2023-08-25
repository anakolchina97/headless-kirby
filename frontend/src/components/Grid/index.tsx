import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import { IGrid } from "@/types";

const Grid: React.FC<IGrid> = ({ headline, text, file }) => {
  return (
    <section className={styles.grid}>
      <div className={styles.grid__ImgWrapper}>
        <Image src={file.url} fill style={{ objectFit: "cover" }} alt="" />
      </div>
      <h2 className={styles.grid__title}>{headline}</h2>
      <p className={styles.grid__text}>{text}</p>
    </section>
  );
};

export default Grid;
