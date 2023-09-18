import Link from 'next/link';
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineBriefcase,
  HiOutlinePhone,
} from 'react-icons/hi';
import styles from './Bottombar.module.css';

const Bottombar = () => {
  return (
    <div id={styles.container}>
      <Link href="" className={styles.children}>
        <HiOutlineHome />
      </Link>
      <Link href="" className={styles.children}>
        <HiOutlineUser />
      </Link>
      <Link href="" className={styles.children}>
        <HiOutlineBriefcase />
      </Link>
      <Link href="" className={styles.children}>
        <HiOutlinePhone />
      </Link>
    </div>
  );
};

export default Bottombar;
