import Link from 'next/link';
import { FC } from 'react';
import styles from './Logo.module.scss';

interface LogoProps {
  additionalClass?: string;
}

const Logo: FC<LogoProps> = ({ additionalClass }) => {
  const logoClass = [styles.logo];
  if (additionalClass) {
    logoClass.push(additionalClass);
  }

  return (
    <div className={logoClass.join(' ')}>
      <Link href='/'>Logo Here</Link>
    </div>
  );
};

export default Logo;
