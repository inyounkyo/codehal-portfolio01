import styles from "../styles/Resume.module.css";

const Skills = () => {
  return (
    <div className={styles["resume-list"]}>
      <div className={styles["resume-item"]}>
        <i className="fab fa-html5"></i>
        <span>HTML5</span>
      </div>
      <div className={styles["resume-item"]}>
        <i className="fab fa-css3-alt"></i>
        <span>CSS3</span>
      </div>
      <div className={styles["resume-item"]}>
        <i className="fab fa-js"></i>
        <span>Javascript</span>
      </div>
      <div className={styles["resume-item"]}>
        <i className="fab fa-react"></i>
        <span>React.js</span>
      </div>
      <div className={styles["resume-item"]}>
        <i className="fab fa-vuejs"></i>
        <span>Vue.js</span>
      </div>
      <div className={styles["resume-item"]}>
        <i className="fab fa-angellist"></i>
        <span>Tailwind CSS</span>
      </div>
      <div className={styles["resume-item"]}>
        <i className="fab fa-node-js"></i>
        <span>Node.js</span>
      </div>
      <div className={styles["resume-item"]}>
        <i className="fab fa-accusoft"></i>
        <span>Mongo DB</span>
      </div>
    </div>
  );
};

export default Skills;
