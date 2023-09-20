import { socials } from '@/constants/socials';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div id={styles.container}>
      <div className={styles.children}>
        <span id={styles.heading}>Kunal Gaur</span>
        <span id={styles.text}>Portfolio @ 2023-24</span>
      </div>

      <div className={styles.children}>
        <span id={styles.title}>Find me on.</span>
        {socials.map((social) => {
          return (
            <Link href={social.link} className={styles.link}>
              {social.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
