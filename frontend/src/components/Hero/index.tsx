import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import { IGrid } from "@/types";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const Grid: React.FC<IGrid> = ({ images }) => {
  return (
    <section className={styles.hero}>
      {images.map((image: { url: string | StaticImport }) => (
        <div className={styles.hero__wrapper}>
          <Image
            src={image.url}
            fill={true}
            sizes="(max-width: 768px) 100vw"
            style={{ objectFit: "cover" }}
            priority={true}
            alt=""
          />
        </div>
      ))}
    </section>
  );
};

export default Grid;
