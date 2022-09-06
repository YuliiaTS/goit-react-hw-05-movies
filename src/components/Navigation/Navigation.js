import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
export default function Navigation() {
  return (
    <nav className={styles.mainnav}>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.active : styles.navitem
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.active : styles.navitem
        }
        to="/movies"
      >
        Movies
      </NavLink>
    </nav>
  );
}