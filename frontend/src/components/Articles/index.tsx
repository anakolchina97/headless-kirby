import React from "react";
import styles from "./page.module.scss";
import Link from "next/link";

const Articles = () => {
  return (
    <>
      <h2 className="h2">Articles</h2>
      <article className={styles.articles}>
        {[...Array(4)].map((key) => (
          <Link href={"/"} key={key}>
            1
          </Link>
        ))}
      </article>
    </>
  );
};

export default Articles;
