import Link from 'next/link';
import styles from './Topbar.module.css';

const Topbar = () => {
  return (
    <div id={styles.container}>
      <span id={styles.logo}>Kunal.</span>
      <div id={styles.right}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <Link href="/work" className={styles.link}>
          Work
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
