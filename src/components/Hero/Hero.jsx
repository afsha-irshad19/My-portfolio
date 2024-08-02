import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hey, myself
          <br />
          <span className={styles.name}>Afsha </span>Irshad
        </h1>
        <p className={styles.description}>
          I'm a full-stack developer with 2 years of experience using React and
          NodeJS. Let's connect if you'd like to explore further!
        </p>
        <div className={styles.btnContainer}>
          <a
            href="mailto:afshairshad2973@gmail.com"
            className={styles.contactBtn}
          >
            Contact Me
          </a>
          <a
            href="./assets/Afsha-frontendDev.pdf"
            download="AfshaIrshad-resume.pdf"
            className={styles.downloadBtn}
          >
            Download Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImg.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
