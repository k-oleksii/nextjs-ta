// Core
import { FC } from 'react';

// Components
import Socials from '@/components/socials/Socials';
import ContactUsForm from './form/ContactUsForm';

// Helpers
import { getIcon } from '@/helpers/getIcon';

// Styles
import { default as stylesGlobal } from '@/styles/Layout.module.scss';
import styles from './ContactUs.module.scss';

// Types
import { EnumIcons } from '@/types';

const ContactUs: FC = () => {
  return (
    <div className={stylesGlobal.constrained}>
      <h1 className={stylesGlobal.title}>Contact Us</h1>
      <p className={stylesGlobal.subtitle}>
        Any question or remarks? Just write us a message!
      </p>
      <div className={styles.contact}>
        <div className={styles.info}>
          <h2 className={styles.title}>Contact Information</h2>
          <p className={styles.subtitle}>Say something to start a live chat!</p>
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
          <Socials additionalClass={styles.socials} />
          <div className={styles.decorate}></div>
        </div>
        <div className={styles.form}>
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
