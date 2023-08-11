// Core
import Link from 'next/link';
import { FC } from 'react';

// Helpers
import { getIcon } from '@/helpers/getIcon';

// Types
import { EnumIcons, IAdditionalClass } from '@/types';

// Styles
import styles from './Socials.module.scss';

const Socials: FC<IAdditionalClass> = ({ additionalClass }) => {
  const socialsClass = [styles.socials];
  if (additionalClass) {
    socialsClass.push(additionalClass);
  }
  return (
    <div className={socialsClass.join(' ')}>
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
