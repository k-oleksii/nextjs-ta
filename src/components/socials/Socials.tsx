import { getIcon } from '@/helpers/getIcon';
import { EnumIcons } from '@/types';
import Link from 'next/link';
import { FC } from 'react';
import styles from './Socials.module.scss';

const Socials: FC = () => {
  return (
    <div className={styles.socials}>
      <Link href='https://twitter.com/' target='_blank' className={styles.item}>
        {getIcon(EnumIcons.twitter)}
      </Link>
      <Link
        href='https://www.instagram.com/'
        target='_blank'
        className={styles.item}
      >
        {getIcon(EnumIcons.inst)}
      </Link>
      <Link href='https://discord.com/' target='_blank' className={styles.item}>
        {getIcon(EnumIcons.discord)}
      </Link>
    </div>
  );
};

export default Socials;
