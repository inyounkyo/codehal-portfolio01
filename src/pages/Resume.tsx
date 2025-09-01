import { useState } from "react";

import Experience from "../components/Experience";

import styles from "../styles/Resume.module.css";
import resumeListData from "../data/resume.json";

type ButtonTy = {
  id: number;
  pjtName: string;
  css: string;
  content: string;
  actHandler?: (actObj: ButtonTy) => void;
};

function ButtonActive({ act, actHandler }: ButtonTy) {
  const b = resumeListData.map((data, idx) => {
    const btn =
      act.id === idx
        ? `${styles["resume-btn"]} ${styles.active}`
        : styles["resume-btn"];
    return (
      <button key={idx} className={btn} onClick={() => actHandler(data)}>
        {data.pjtName}
      </button>
    );
  });
  return b;
}

const Content = ({ act }) => {
  return (
    <div className={`${styles["resume-detail"]} ${styles.education}`}>
      <h2 className={styles.heading}>
        My <span>{act.pjtName}</span>
      </h2>
      <p className={styles.desc}>{act.content}</p>
    </div>
  );
};

const Resume = () => {
  const [act, setAct] = useState(resumeListData[0]);

  const actFun = (actObj: ButtonTy) => {
    setAct(actObj);
  };

  return (
    <>
      <section className={styles.resume}>
        <div className={styles["resume-container"]}>
          <div className={styles["resume-box"]}>
            <h2>Why Hire Me?</h2>
            <p className={styles.desc}>
              Create a Complete Responsive Personal Portfolio Website using HTML
              CSS and Javascript, Build a Complete.
            </p>
            <ButtonActive act={act} actHandler={actFun} />
          </div>

          <div className={styles["resume-box"]}>
            {/* <Content act={act} /> */}
            {<Experience />}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
