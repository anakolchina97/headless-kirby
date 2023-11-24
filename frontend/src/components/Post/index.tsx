import { IPost } from "@/types";
import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";

const Post = ({ icon, photo, title, text, blocks }: IPost) => {
  return (
    <section className={styles.post}>
      <picture>
        <Image
          className={styles.post__icon}
          src={icon}
          width={40}
          height={54}
          alt=""
        />
      </picture>
      <h1 className={`${styles.post__title}`}>{title}</h1>
      <p className={`${styles.post__text} text`}>{text}</p>
      <div className={`${styles.post__block}`}>
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
        {photo && (
          <div className={`${styles.post__image}`}>
            <Image
              fill={true}
              src={photo}
              style={{ objectFit: "cover" }}
              priority={true}
              alt=""
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Post;
