import React from "react";
import styles from "./page.module.scss";
import Button from "../Button";
import { IAbout } from "@/types";

const About = ({ about }: IAbout) => {
  const { title, text, btn } = about[0];

  return (
    <section className={styles.about}>
      <h2 className={`${styles.about__title} h2`}>{title}</h2>
      <p className={`${styles.about__text} text`}>{text}</p>
      <Button className={styles.about__btn} link="/about">
        {btn}
      </Button>
    </section>
  );
};

export default About;
