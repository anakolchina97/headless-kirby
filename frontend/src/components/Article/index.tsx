import { IArticle } from "@/types";
import styles from "./page.module.scss";
import React from "react";
import Image from "next/image";

const Article = ({ src, title, className }: IArticle) => {
  return (
    <article className={`${styles.article} ${className}`}>
      <picture className={styles.article__picture}>
        <Image
          className={styles.article__img}
          src={src}
          width={40}
          height={54}
          alt=""
        />
      </picture>
      <p className={styles.article__title}>{title}</p>
    </article>
  );
};

export default Article;
