'use client';
import { createSubscription } from '@/services/createSubscription';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import styles from './Newsletter.module.scss';

const Newsletter: FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await createSubscription(email);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className={styles.newsletter}>
      <span className={styles.title}>Join Our Newsletter</span>
      <form onSubmit={handleSubmit}>
        <div className={styles.fieldGroup}>
          <input
            type='email'
            value={email}
            onChange={handleChange}
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
