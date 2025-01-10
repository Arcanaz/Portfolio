// import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Jose Gomez</h1>
        <p className={styles.description}>
          Hi, I'm Jose Gomez, a full-stack developer with experience building modern web applications.
        </p>
        <p className={styles.description}>
          I believe the key traits of a great developer are simplifying complexity, working efficiently, and collaborating effectively with a team.
        </p>
        <p className={styles.description}>
          If you're looking to add a dedicated and skilled developer to your team, feel free to contact me!
        </p>

        <a href="mailto:josegomez5218@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage0.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
