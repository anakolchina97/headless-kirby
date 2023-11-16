import React from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import Article from "../Article";

const data = [
  {
    title: "Relationship",
  },
];

const Articles = () => {
  return (
    <section className={styles.articles}>
      <h2 className={`${styles.articles__title} h2`}>Articles</h2>
      <section className={styles.articles__cards}>
        {data.map(({ title }, index) => (
          <Link href={`/articles/${index + 1}`} key={index}>
            <Article
              src={`/images/articles/icon-${index + 1}.svg`}
              title={title}
            />
          </Link>
        ))}
      </section>
    </section>
  );
};

export default Articles;
