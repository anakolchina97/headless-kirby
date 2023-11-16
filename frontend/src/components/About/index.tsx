import React from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import Button from "../Button";

type Props = {};

const About = (props: Props) => {
  return (
    <section className={styles.about}>
      <h2 className={`${styles.about__title} h2`}>About</h2>
      <p className={`${styles.about__text} text`}>
        Lorem Ipsum is&nbsp;simply dummy text of&nbsp;the printing and
        typesetting industry. Lorem Ipsum has been the industry&rsquo;s standard
        dummy text ever since the 1500s, when an&nbsp;unknown printer took
        a&nbsp;galley of&nbsp;type and scrambled it&nbsp;to&nbsp;make
        a&nbsp;type specimen book. It&nbsp;has survived not only five centuries,
        but also the leap into electronic typesetting, remaining essentially
        unchanged. It&nbsp;was popularised in&nbsp;the 1960s with the release
        of&nbsp;Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of&nbsp;Lorem Ipsum.
      </p>
      <Button className={styles.about__btn} link="/about">
        go to page
      </Button>
    </section>
  );
};

export default About;
