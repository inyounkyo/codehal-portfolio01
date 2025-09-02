import { useReducer } from "react";

import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";

import styles from "../styles/Resume.module.css";
import resumeListData from "../data/resume.json";

type ButtonTy = {
  id: number;
  pjtName: string;
  css: string;
  content: string;
  actDispatch: (actObj: { type: number; act: object }) => void;
};

const initialState = { act: resumeListData[0], CompoName: Experience };

function reducer(state, action) {
  switch (action.type) {
    case 0: {
      return { act: action.act, CompoName: Experience };
    }
    case 1: {
      return { act: action.act, CompoName: Education };
    }
    case 2: {
      return { act: action.act, CompoName: Skills };
    }
    case 3: {
      return { act: action.act, CompoName: AboutMe };
    }
  }
  throw Error("Unknown action: " + action.type);
}

function ButtonActive({ actState, actDispatch }: ButtonTy) {
  const b = resumeListData.map((data, idx) => {
    const btn =
      actState.id === idx
        ? `${styles["resume-btn"]} ${styles.active}`
        : styles["resume-btn"];
    return (
      <button
        key={idx}
        className={btn}
        onClick={() => actDispatch({ type: data.id, act: data })}
      >
        {data.pjtName}
      </button>
    );
  });
  return b;
}

type ContentTy = {
  id: number;
  pjtName: string;
  css: string;
  content: string;
};

const Content = ({ actState, children }: ContentTy) => {
  const s = actState.css;
  return (
    <div className={`${styles["resume-detail"]} ${styles[s]}`}>
      <div className={styles["resume-box"]}>
        <h2 className={styles.heading}>
          My <span>{actState.pjtName}</span>
        </h2>
        <p className={styles.desc}>{actState.content}</p>
      </div>
      <div className={`${styles["resume-detail"]} ${styles.experience}`}>
        <div className={styles["resume-box"]}>{children}</div>
      </div>
    </div>
  );
};

const Resume = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
            <ButtonActive actState={state.act} actDispatch={dispatch} />
          </div>
          <Content actState={state.act}>{<state.CompoName />}</Content>
          {/* {<Experience />} */}
          {/* {<Education />} */}
          {/* {<Skills />} */}
        </div>
      </section>
    </>
  );
};

export default Resume;
