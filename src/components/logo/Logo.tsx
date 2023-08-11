// Core
import Link from 'next/link';
import { FC } from 'react';

// Styles
import styles from './Logo.module.scss';

// Types
import { IAdditionalClass } from '@/types';

const Logo: FC<IAdditionalClass> = ({ additionalClass }) => {
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
