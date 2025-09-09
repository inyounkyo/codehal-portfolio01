import React, { useState, useRef } from "react";

import type { ImgType, portDataTy } from "../lib/type/PortfolioType";

import portfolioData from "../data/portfolio.json";

import styles from "../styles/Portfolio.module.css";

const PortfolioContainer = () => {
  const [currState, setCurrState] = useState<number>(2);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  function btnImgMoveHandler(btnId: string): void {
  //  console.log(btnId);
  //  console.log('1:currState: %s', currState);
   if (btnId == 'prev') setCurrState(currState =>currState-1);
   if (btnId == 'next') setCurrState(currState =>currState+1);
    
  }
  
  return (
      <>
        <PortfolioBoxText portData={ portfolioData[currState] }/>
        <PortfolioBoxImg 
          btnImgMoveHandler={btnImgMoveHandler} 
          btnRef={btnRef}
          currState={currState}
          
        />
      </>
          );
}

const PortfolioBoxText = ( props:portDataTy ) => {
  return (
    <div className={styles["portfolio-box"]}>
            <div className={`${styles["portfolio-detail"]} ${styles.active}`}>
              <p className={styles.numb}>{props.portData.numb}</p>
              <h3>Frontend Project</h3>
              <p>{props.portData.content}</p>
              <div className={styles.tech}>
                <p>{props.portData.tech}</p>
              </div>
              <div className={styles["live-github"]}>
                  <a href="#"><i className="fas fa-chevron-right"></i><span>Live Project</span></a>
                  <a href="#"><i className="fab fa-github"></i><span>Github Repository</span></a>
                </div>
            </div>
          </div>
  );
}

const PortfolioBoxImg = (props:ImgType) => {
  
  const portfolioDataLen:number = (portfolioData).length
  return (
          <div className={styles["portfolio-box"]}>
            <div className={styles["portfolio-carousel"]}>
              <div className={styles["img-slide"]}>
                <div className={styles["img-item"]}>
                  <img src={`/images/${portfolioData[props.currState].img}`}  />
                </div>         
              </div>
            </div>

            <div className={styles.navigation}>
              <button 
                id='prev'
                ref={props.btnRef}
                onClick={ () => props.btnImgMoveHandler('prev') }
                className={styles["arrow-left"]}
                disabled={ (0 == props.currState)?true:false}
                ><i className="fas fa-chevron-left"></i>
              </button>
              <button 
                id='next'
                ref={props.btnRef}
                onClick={ () => props.btnImgMoveHandler('next') }
                className={styles["arrow-right"]}
                disabled={ (props.currState<portfolioDataLen-1)?false:true}
                ><i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
  );
}

const Portfolio = () => {
  return (
    <>
      <section className={styles.portfolio}>
        <h2 className="heading">
          Latest <span>Projet</span>
        </h2>
        <div className={styles["portfolio-container"]}>
          
          <PortfolioContainer />
           
        </div>
      </section>
    </>
  );
};

export default Portfolio;
