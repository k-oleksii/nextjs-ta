import { IContact } from '@/types';
import axios from 'axios';

export const createMessage = async (data: IContact) => {
  try {
    const response = await axios.post('/api/contact', data);

    if (response.status === 200) {
      console.log('Message sent');
    } else {
      console.error('Message error');
    }
  } catch (error) {
    console.error('An error has occurred:', error);
  }
};
