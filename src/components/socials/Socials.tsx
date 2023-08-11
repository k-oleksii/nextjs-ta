import { getIcon } from '@/helpers/getIcon';
import { EnumIcons } from '@/types';
import Link from 'next/link';
import { FC } from 'react';
import styles from './Socials.module.scss';

interface ISocialsProps {
  additionalClass?: string;
}

const Socials: FC<ISocialsProps> = ({ additionalClass }) => {
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
