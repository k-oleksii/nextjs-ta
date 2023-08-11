'use client';
import Logo from '@/components/logo/Logo';
import { getIcon } from '@/helpers/getIcon';
import { default as stylesGlobal } from '@/styles/Layout.module.scss';
import { EnumIcons } from '@/types';
import { usePathname } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import NavBar from '../nav-bar/NavBar';
import styles from './Header.module.scss';
const Header: FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const pathname = usePathname();
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen); //
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    closeNav();
  }, [pathname]);

  return (
    <header className={styles.header}>
      <div className={stylesGlobal.constrained}>
        <div className={styles.content}>
          <Logo />
          <NavBar isOpen={isNavOpen} onClose={closeNav} />
          <button onClick={toggleNav} className={styles.btn}>
            {getIcon(EnumIcons.burger)}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
