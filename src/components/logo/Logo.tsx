import Link from 'next/link';
import { FC } from 'react';
import styles from './Logo.module.scss';

interface ILogoProps {
  additionalClass?: string;
}

const Logo: FC<ILogoProps> = ({ additionalClass }) => {
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
