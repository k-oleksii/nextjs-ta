import Logo from '@/components/Logo/Logo';
import { FC } from 'react';
import Navigation from '../nav/Navigation';

const Header: FC = () => {
  return (
    <header className='header'>
      <div className='container'>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
