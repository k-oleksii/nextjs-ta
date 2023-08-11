'use client';
// Core
import { usePathname } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

// Components
import Logo from '@/components/logo/Logo';
import NavBar from '@/components/nav-bar/NavBar';

// Helpers
import { getIcon } from '@/helpers/getIcon';

// Styles
import { default as stylesGlobal } from '@/styles/Layout.module.scss';
import styles from './Header.module.scss';

// Types
import { EnumIcons } from '@/types';

const Header: FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const pathname = usePathname();

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleCloseNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    handleCloseNav();
  }, [pathname]);

  return (
    <header className={styles.header}>
      <div className={stylesGlobal.constrained}>
        <div className={styles.content}>
          <Logo />
          <NavBar isOpen={isNavOpen} onClose={handleCloseNav} />
          <button onClick={handleToggleNav} className={styles.btn}>
            {getIcon(EnumIcons.burger)}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
