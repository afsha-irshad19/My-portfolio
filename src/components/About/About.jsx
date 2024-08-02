import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/icon1.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer proficient in designing and developing
                highly responsive and performance-optimized websites, ensuring
                seamless user experiences across various devices and platforms.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/icon2.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have a background in creating efficient and highly optimized
                back-end systems and APIs, focusing on speed and reliability to
                support seamless front-end operations.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/icon3.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have extensive experience in designing numerous front-end
                interfaces and developing comprehensive design systems, ensuring
                consistency and visual appeal across projects.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
