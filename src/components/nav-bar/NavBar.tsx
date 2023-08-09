import { getIcon } from '@/helpers/getIcon';
import { EnumIcons } from '@/types';
import Link from 'next/link';
import { FC } from 'react';
import styles from './NavBar.module.scss';
import { navData } from './navData';

const NavBar: FC = () => {
  return (
    <div className={styles.navBar}>
      <nav className={styles.nav}>
        <ul>
          {navData.map(item => {
            return (
              <li key={item.id}>
                <Link href={item.link}>
                  <span>{item.label}</span>
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
