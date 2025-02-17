import Link from 'next/link';
import styles from '../styles/modules/menu.module.scss';

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul>
        <li className={styles.menu__item}>
          <Link href="/" className={styles.menu__link}>
            Home
          </Link>
        </li>
        <li className={styles.menu__item}>
          <Link href="/about" className={styles.menu__link}>
            About
          </Link>
        </li>
        <li className={styles.menu__item}>
          <Link href="/contact" className={styles.menu__link}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
