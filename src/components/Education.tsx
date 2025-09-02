import styles from "../styles/Resume.module.css";

const Education = () => {
  return (
    // <div className={`${styles["resume-detail"]} ${styles.education}`}>
    //   <div className={styles["resume-box"]}>
    <div className={styles["resume-list"]}>
      <div className={styles["resume-item"]}>
        <p className={styles.year}>2025</p>
        <h3>Programming Course</h3>
        <p className={styles.company}>Online Course</p>
        <p>
          ebsite using HTML CSS and Javascript, How to Create a How to Make.
        </p>
      </div>
      <div className={styles["resume-item"]}>
        <p className={styles.year}>2025 - 2024</p>
        <h3>Web Development Bootcamp</h3>
        <p className={styles.company}>Online Course Platform</p>
        <p>
          ebsite using HTML CSS and Javascript, How to Create a How to Make.
        </p>
      </div>
      <div className={styles["resume-item"]}>
        <p className={styles.year}>2023</p>
        <h3>Certified Web Development</h3>
        <p className={styles.company}>Online Course Platform</p>
        <p>
          ebsite using HTML CSS and Javascript, How to Create a How to Make.
        </p>
      </div>
      <div className={styles["resume-item"]}>
        <p className={styles.year}>2020 - 2021</p>
        <h3>Doctor of Engineering</h3>
        <p className={styles.company}>Codehal University</p>
        <p>
          ebsite using HTML CSS and Javascript, How to Create a How to Make.
        </p>
      </div>
      <div className={styles["resume-item"]}>
        <p className={styles.year}>2019 - 2020</p>
        <h3>Master of Computer Science</h3>
        <p className={styles.company}>Codehal University</p>
        <p>
          ebsite using HTML CSS and Javascript, How to Create a How to Make.
        </p>
      </div>
      <div className={styles["resume-item"]}>
        <p className={styles.year}>2017 - 2019</p>
        <h3>Bachlor of Data Science</h3>
        <p className={styles.company}>Codehal University</p>
        <p>
          ebsite using HTML CSS and Javascript, How to Create a How to Make.
        </p>
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default Education;
