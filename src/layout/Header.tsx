import { Link, useLocation  } from "react-router-dom";

import styles from "../styles/Header.module.css";

const Header = () => {
  const pathname = useLocation().pathname;


  return (
    <>
      <header>
        <a href="#" className={styles.logo}>
          UtobuRocker.
        </a>
        
        <i className="fas fa-bars" id={styles["menu-icon"]}></i>
        
        <nav>
          <Link to="/"
             className={(pathname=='/')?styles.active:''}>Home</Link>
          <Link to="/services" 
            className={(pathname=='/services')?styles.active:''}>Services</Link>
          <Link to="/resume" 
            className={(pathname=='/resume')?styles.active:''}>Resume</Link>
          <Link to="/portfolio"
            className={(pathname=='/portfolio')?styles.active:''}>Portfolio</Link>
          <Link to="/content" className={(pathname=='/content')?styles.active:''}>Content</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
