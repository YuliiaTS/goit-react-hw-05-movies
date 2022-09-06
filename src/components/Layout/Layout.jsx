import Navigation from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

export default function Layout() {
  return (
    <>
      <header className={styles.header}>
        <Navigation />
      </header>
      <Outlet />
    </>
  );
}
