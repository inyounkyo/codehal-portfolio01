import styles from "../styles/Resume.module.css";

const AboutMe = () => {
  return (
    <div className={styles["resume-list"]}>
      <div className={styles["resume-item"]}>
        <p>
          Name <span>Lucis Mecanic</span>
        </p>
      </div>
      <div className={styles["resume-item"]}>
        <p>
          Gender <span>Male</span>
        </p>
      </div>
      <div className={styles["resume-item"]}>
        <p>
          Age <span>23 Years Old</span>
        </p>
      </div>
      <div className={styles["resume-item"]}>
        <p>
          Status <span>Single</span>
        </p>
      </div>
      <div className={styles["resume-item"]}>
        <p>
          City <span>Los Angers</span>
        </p>
      </div>
      <div className={styles["resume-item"]}>
        <p>
          Nationality <span>Reperblic Kor.</span>
        </p>
      </div>
      <div className={styles["resume-item"]}>
        <p>
          Experience <span>10+ Years</span>
        </p>
      </div>
      <div className={styles["resume-item"]}>
        <p>
          Full Time <span>Available</span>
        </p>
      </div>
      <div className={styles["resume-item"]}>
        <p>
          Freelance <span>Available</span>
        </p>
      </div>
      <div className={styles["resume-item"]}>
        <p>
          Phone <span>(+80) 010 4393 4532</span>
        </p>
      </div>
      <div className={styles["resume-item"]}>
        <p>
          Email <span>abcde@kakao.com</span>
        </p>
      </div>
      <div className={styles["resume-item"]}>
        <p>
          Languages <span>Koren, Chinn, Vetinam, English</span>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
