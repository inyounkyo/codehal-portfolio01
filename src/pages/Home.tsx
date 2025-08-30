import styles from "../styles/Home.module.css";
import face from "../assets/images/home.png";


const Home = () => {
  return(
    <>
      <section className={`${styles.home} ${styles.active}`}>
        <div className={styles["home-detail"]}>
          <h1>Lucius Rocker.</h1>
          <h2>I'm a Coder</h2>
          <p>
            Create a Complete Responsive Personal Portfolio Website using HTML CSS and Javascript, Build a Complete Responsive Personal Portfolio Website using HTML CSS and Javascript, How to Create a Complete Personal Portfolio Website using HTML and CSS Javascript, How to Make a Responsive Personal Portfolio Website using HTML CSS Javascrip
          </p>
          <div className={styles["btn-sci"]}>
            <a href="#" className={styles.btn}>Download CV</a>
            <div className={styles.sci}>
              <a href="#"><i className="fab fa-github"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-discord"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>

        <div className={styles["home-img"]}>
          <div className={styles["img-box"]}>
            <div className={styles["img-item"]}>
              <img src={face} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
