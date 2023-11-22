import { IArticle } from "@/types";
import styles from "./page.module.scss";
import React from "react";

const Article = ({ src, title, className }: IArticle) => {
  return (
    <article className={`${styles.article} ${className}`}>
      <picture className={styles.article__picture}>
        <img className={styles.article__img} src={src} />
      </picture>
      <p className={styles.article__title}>{title}</p>
    </article>
  );
};

export default Article;
