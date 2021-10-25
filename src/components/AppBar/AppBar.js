import { NavLink } from "react-router-dom";
import styles from './appBar.module.css';

export default function AppBar() {
  return (
    <header className={styles.header}>
      <nav>
        <NavLink to="/" exact className={styles.link} activeClassName={styles.activeLink}>Home</NavLink>
        <NavLink to="/movies" className={styles.link} activeClassName={styles.activeLink}>Movies</NavLink>
    </nav>
    </header>
  );
}