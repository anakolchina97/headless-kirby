import { IPost } from "@/types";
import React from "react";
import styles from "./page.module.scss";

const Post = ({ src, title, text }: IPost) => {
  return (
    <section className={styles.post}>
      <picture className={styles.post__picture}>
        <img className={styles.post__img} src={src} />
      </picture>
      <h2 className="h2">{title}</h2>
      <p className="text">{text}</p>
    </section>
  );
};

export default Post;
