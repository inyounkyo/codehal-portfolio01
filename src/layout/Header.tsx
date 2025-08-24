import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <>
      <header>
        <a href="#" className={styles.logo}>
          UtobuRocker.
        </a>
        <button
          id="menu-open-button"
          className="fas fa-bars"
          onClick={() => {}}
        ></button>
        <nav>
          <a href="#" className={styles.active}>
            Home
          </a>
          <a href="#">Services</a>
          <a href="#">Resume</a>
          <a href="#">Portfolio</a>
          <a href="#">Content</a>
        </nav>
      </header>
    </>
  );
};

export default Header;
