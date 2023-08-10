import Logo from '@/components/logo/Logo';
import { FC } from 'react';
import NavBar from '../nav-bar/NavBar';
import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className='container mx-auto'>
        <div className={styles.content}>
          <Logo />
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
