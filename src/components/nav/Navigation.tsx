import { getIcon } from '@/helpers/getIcon';
import { EnumIcons } from '@/types';
import Link from 'next/link';
import { FC } from 'react';
import { navData } from './navData';

const Navigation: FC = () => {
  return (
    <div className='nav-bar'>
      <nav className='nav'>
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
      <div className='services'>
        <span className='services-link'>{getIcon(EnumIcons.user)}</span>
        <span className='services-link'>{getIcon(EnumIcons.cart)}</span>
      </div>
    </div>
  );
};

export default Navigation;
