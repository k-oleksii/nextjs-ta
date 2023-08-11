'use client';

import { getIcon } from '@/helpers/getIcon';
import { EnumIcons } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import Logo from '../logo/Logo';
import styles from './NavBar.module.scss';
import { navData } from './navData';

interface INavProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavBar: FC<INavProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  const navClass = [styles.navBar];

  if (isOpen) {
    navClass.push(styles.open);
  }

  return (
    <div className={navClass.join(' ')}>
      <div className={styles.head}>
        <Logo />
        <button onClick={onClose} className={styles.btn}>
          {getIcon(EnumIcons.close)}
        </button>
      </div>
      <nav className={styles.nav}>
        <ul>
          {navData.map(item => {
            return (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className={pathname === item.link ? styles.active : ''}
                >
                  {item.label}
                  {item.subMenu && getIcon(EnumIcons.arrow)}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={styles.services}>
        <Link href='/user'>{getIcon(EnumIcons.user)}</Link>
        <Link href='/cart'>{getIcon(EnumIcons.cart)}</Link>
      </div>
    </div>
  );
};

export default NavBar;
