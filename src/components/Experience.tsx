import React from "react";
import styles from "../styles/Resume.module.css";

const Experience = () => {
  return (
    <div className={`${styles["resume-detail"]} ${styles.experience}`}>
      <h2 className={styles.heading}>
        My <span>Experience</span>
      </h2>
      <p className={styles.desc}>
        Create a Complete Responsive Personal Portfolio Website using HTML CSS .
      </p>
      <div className={styles["resume-list"]}>
        <div className={styles["resume-item"]}>
          <p className={styles.year}>2025 - Present</p>
          <h3>Frontend Developer</h3>
          <p className={styles.company}>Abc Corp.</p>
          <p>
            Personal Portfolio Website using HTML CSS and Javascript, How to
            Create a Complete
          </p>
        </div>
        <div className={styles["resume-item"]}>
          <p className={styles.year}>2024 - 2025</p>
          <h3>Full Stack Developer</h3>
          <p className={styles.company}>Google</p>
          <p>
            Personal Portfolio Website using HTML CSS and Javascript, How to
            Create a Complete
          </p>
        </div>
        <div className={styles["resume-item"]}>
          <p className={styles.year}>2023 - 2024</p>
          <h3>Backend Developer</h3>
          <p className={styles.company}>YouTube</p>
          <p>
            Personal Portfolio Website using HTML CSS and Javascript, How to
            Create a Complete
          </p>
        </div>
        <div className={styles["resume-item"]}>
          <p className={styles.year}>2022 - 2023</p>
          <h3>Backend Developer</h3>
          <p className={styles.company}>Amazon Inc.</p>
          <p>
            Personal Portfolio Website using HTML CSS and Javascript, How to
            Create a Complete
          </p>
        </div>
        <div className={styles["resume-item"]}>
          <p className={styles.year}>2021 - 2022</p>
          <h3>UI/UX Designer</h3>
          <p className={styles.company}>Zbc Inc.</p>
          <p>
            Personal Portfolio Website using HTML CSS and Javascript, How to
            Create a Complete
          </p>
        </div>
        <div className={styles["resume-item"]}>
          <p className={styles.year}>2020 - 2021</p>
          <h3>Junior Designer</h3>
          <p className={styles.company}>MBC Inc.</p>
          <p>
            Personal Portfolio Website using HTML CSS and Javascript, How to
            Create a Complete
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
