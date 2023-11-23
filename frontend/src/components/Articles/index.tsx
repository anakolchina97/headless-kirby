import React from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import Article from "../Article";
import { getData } from "@/lib/getData";

const data = [
  {
    title: "Relationship",
  },
  {
    title: "Addictions",
  },
  {
    title: "Abuse",
  },
  {
    title: "Development",
  },
  {
    title: "Depression",
  },
  {
    title: "Disorders",
  },
];

const Articles = async () => {
  const articlesRequest = await getData({
    query: 'page("articles").children.listed',
    select: {
      title: true,
      id: true,
      image: {
        select: {
          url: true,
        },
      },
    },
  });

  const { result } = articlesRequest;
  return (
    <section className={styles.articles}>
      <h2 className={`${styles.articles__title} h2`}>Articles</h2>
      <section className={styles.articles__cards}>
        {result.map(({ title, id, image: { url } }: any, index: number) => (
          <Link href={`/${id}`} key={title}>
            <Article
              className={styles.articles__card}
              src={url}
              title={title}
            />
          </Link>
        ))}
      </section>
    </section>
  );
};

export default Articles;
