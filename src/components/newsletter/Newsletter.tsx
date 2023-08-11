'use client';
// Core
import { ChangeEvent, FC, FormEvent, useState } from 'react';

// Services
import { createSubscribe } from '@/services/createSubscribe';

// Types
import { IAdditionalClass } from '@/types';

// Styles
import styles from './Newsletter.module.scss';

const Newsletter: FC<IAdditionalClass> = ({ additionalClass }) => {
  const [email, setEmail] = useState('');

  const newsletterClass = [styles.newsletter];

  if (additionalClass) {
    newsletterClass.push(additionalClass);
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await createSubscribe(email);
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className={newsletterClass.join(' ')}>
      <span className={styles.title}>Join Our Newsletter</span>
      <form onSubmit={handleSubmit}>
        <div className={styles.fieldGroup}>
          <input
            type='email'
            value={email}
            onChange={handleChangeInput}
            className={styles.input}
            placeholder='Your email address'
          />
          <button type='submit' className={styles.btn}>
            Subscribe
          </button>
        </div>
      </form>
      <p className={styles.description}>
        * Will send you weekly updates for your better tool management.
      </p>
    </div>
  );
};

export default Newsletter;
