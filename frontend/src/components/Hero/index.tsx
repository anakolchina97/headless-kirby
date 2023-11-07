import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import { IGrid } from "@/types";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const Grid: React.FC<IGrid> = ({ images }) => {
  return (
    <section className={styles.hero}>
      {images.map((image: { url: string | StaticImport }) => (
        <div className={styles.hero__ImgWrapper}>
          <Image src={image.url} fill style={{ objectFit: "cover" }} alt="" />
        </div>
      ))}
    </section>
  );
};

export default Grid;
