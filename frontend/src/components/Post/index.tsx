import { IPost } from "@/types";
import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";

const Post = ({ src, title, text, blocks }: IPost) => {
  return (
    <section className={styles.post}>
      <picture className={styles.post__picture}>
        <Image
          className={styles.post__img}
          src={src}
          width={40}
          height={54}
          alt=""
        />
      </picture>
      <h1 className="h2">{title}</h1>
      <p className={`${styles.post__text} text`}>{text}</p>
      <div>
        {blocks
          .filter((block: { type: string }) => block.type === "heading")
          .map(({ text }: any) => (
            <h2 className={`${styles.post__subtitle} h3`}>{text}</h2>
          ))}
        {blocks
          .filter((block: { type: string }) => block.type === "text")
          .map(({ text }: any) => (
            <div
              className={`${styles.post__text} text`}
              dangerouslySetInnerHTML={{ __html: text }}
            ></div>
          ))}
      </div>
    </section>
  );
};

export default Post;
