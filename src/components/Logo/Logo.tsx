import Link from 'next/link';
import { FC } from 'react';
import styles from './Logo.module.scss';

const Logo: FC = () => {
  return (
    <div className={styles.logo}>
      <Link href='/'>Logo Here</Link>
    </div>
  );
};

export default Logo;
