import { getIcon } from '@/helpers/getIcon';
import { EnumIcons } from '@/types';
import Link from 'next/link';
import { FC } from 'react';
import Logo from '../Logo/Logo';
import Newsletter from '../newsletter/Newsletter';
import styles from './Footer.module.scss';
import { footerData } from './footerData';

const contactData = [
  { id: '1', name: 'phone', text: '+1012 3456 789' },
  { id: '2', name: 'email', text: '+1012 3456 789' },
  { id: '3', name: 'phone', text: '+1012 3456 789' },
];

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className='container mx-auto'>
        <Logo additionalClass={styles.logo} />
        <div className={styles.info}>
          <div className={styles.contact}>
            <span className={styles.title}>Reach us</span>
            <ul className={styles.list}>
              <li>
                <a href='tel:+1012 3456 789'>
                  <span className={styles.contactIcon}>
                    {getIcon(EnumIcons.phone)}
                  </span>
                  +1012 3456 789
                </a>
              </li>
              <li>
                <a href='mailto:demo@gmail.com'>
                  <span className={styles.contactIcon}>
                    {getIcon(EnumIcons.email)}
                  </span>
                  demo@gmail.com
                </a>
              </li>
              <li>
                <span className={styles.contactIcon}>
                  {getIcon(EnumIcons.location)}
                </span>
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </li>
            </ul>
          </div>
          <div className={styles.menu}>
            {footerData.map(item => (
              <div key={item.id} className={styles.menuItems}>
                <span className={styles.title}>{item.title}</span>
                <ul className={styles.list}>
                  {item.menu.map((menu, index) => (
                    <li key={item.id + index}>
                      <Link href={menu.link}>{menu.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Newsletter additionalClass={styles.newsletter} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
