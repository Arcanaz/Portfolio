// import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/myImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/fullstack.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Fullstack</h3>
              <p>
                As a fullstack developer, I am flexible in doing a myriad of tasks.
                If a project requires me to, I can specialize in one aspect and still
                understand how it connects with the frontend or backend.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/teamwork3.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Teamwork</h3>
              <p>
                As a team player, I adapt well to others,
                ensuring collaboration and aligned efforts.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/brainstorm.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Learning</h3>
              <p>
                I’m eager to learn and adapt to new web development technologies,
                staying versatile and up-to-date.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
