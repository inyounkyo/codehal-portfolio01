import styles from "../styles/Services.module.css";

const Services = () => {
  return (
    <>
      <section className={styles.services}>
        <h2 className={styles.heading}>My <span>Services</span></h2>
        <div className={styles["services-container"]}>
          <div className={styles["services-box"]}>
            <div className={styles.icon}>
              <i className="fab fa-css3-alt"></i>
              <a href="#"><i className="fa fa-arrow-left"></i></a>
            </div>
            <h3>Web Development</h3>
            <p>Create A Complete Responsive Personal Portfolio Website Using HTML CSS And Javascript.</p>
          </div>

           <div className={styles["services-box"]}>
            <div className={styles.icon}>
              <i className="fa fa-paint-brush"></i>
              <a href="#"><i className="fa fa-arrow-left"></i></a>
            </div>
            <h3>UI/UX Design</h3>
            <p>Create A Complete Responsive Personal Portfolio Website Using HTML CSS And Javascript.</p>
          </div>

          <div className={styles["services-box"]}>
            <div className={styles.icon}>
              <i className="fas fa-palette"></i>
              <a href="#"><i className="fa fa-arrow-left"></i></a>
            </div>
            <h3>Graphic Design</h3>
            <p>Create A Complete Responsive Personal Portfolio Website Using HTML CSS And Javascript.</p>
          </div>

          <div className={styles["services-box"]}>
            <div className={styles.icon}>
              <i className="fa fa-line-chart"></i>
              <a href="#"><i className="fa fa-arrow-left"></i></a>
            </div>
            <h3>SEO</h3>
            <p>Create A Complete Responsive Personal Portfolio Website Using HTML CSS And Javascript.</p>
          </div>

           <div className={styles["services-box"]}>
            <div className={styles.icon}>
              <i className="fa fa-sliders"></i>
              <a href="#"><i className="fa fa-arrow-left"></i></a>
            </div>
            <h3>Video Editing</h3>
            <p>Create A Complete Responsive Personal Portfolio Website Using HTML CSS And Javascript.</p>
          </div>

          <div className={styles["services-box"]}>
            <div className={styles.icon}>
              <i className="fa fa-camera"></i>
              <a href="#"><i className="fa fa-arrow-left"></i></a>
            </div>
            <h3>Photography</h3>
            <p>Create A Complete Responsive Personal Portfolio Website Using HTML CSS And Javascript.</p>
          </div>

        </div>
      </section>    
    </>
  );
};

export default Services;
