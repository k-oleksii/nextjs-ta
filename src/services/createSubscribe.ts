import axios from 'axios';

export const createSubscribe = async (email: string) => {
  try {
    const response = await axios.post('/api/subscribe', { email });

    if (response.status === 200) {
      console.log('Subscribed successfully');
    } else {
      console.error('Subscription error');
    }
  } catch (error) {
    console.error('An error has occurred:', error);
  }
};
