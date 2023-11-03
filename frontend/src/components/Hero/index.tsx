import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import { IGrid } from "@/types";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const Grid: React.FC<IGrid> = ({ images }) => {
  return (
    <section className={styles.grid}>
      <div className={styles.grid__ImgWrapper}>
        {images.map((image: { url: string | StaticImport }) => (
          <Image src={image.url} fill style={{ objectFit: "cover" }} alt="" />
        ))}
      </div>
    </section>
  );
};

export default Grid;
