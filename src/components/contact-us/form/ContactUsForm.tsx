'use client';
import { createMessage } from '@/services/createMessage';
import stylesBtn from '@/styles/Button.module.scss';
import { IContact } from '@/types';
import { FC, FormEvent, useState } from 'react';
import Input from './elements/Input';
import Radio from './elements/Radio';

const options = [
  {
    id: '1',
    label: 'General Inquiry',
    value: 'generalInquiry1',
    name: 'subject',
  },
  {
    id: '2',
    label: 'General Inquiry',
    value: 'generalInquiry2',
    name: 'subject',
  },
  {
    id: '3',
    label: 'General Inquiry',
    value: 'generalInquiry3',
    name: 'subject',
  },
  {
    id: '4',
    label: 'General Inquiry',
    value: 'generalInquiry4',
    name: 'subject',
  },
];

const ContactUsForm: FC = () => {
  const [formData, setFormData] = useState<IContact>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleRadioChange = (selectedValue: FormData) => {
    setFormData(prevData => ({ ...prevData, ...selectedValue }));
  };

  const handleInputChange = (fieldName: string, value: any) => {
    setFormData(prevData => ({ ...prevData, [fieldName]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await createMessage(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-wrap'>
        <div className='w-2/4'>
          <Input
            id='firstName'
            name='firstName'
            label='First Name'
            onChange={handleInputChange}
          />
        </div>
        <div className='w-2/4'>
          <Input
            id='lastName'
            name='lastName'
            label='Last Name'
            onChange={handleInputChange}
          />
        </div>
        <div className='w-2/4'>
          <Input
            id='email'
            label='Email'
            type='email'
            name='email'
            onChange={handleInputChange}
          />
        </div>
        <div className='w-2/4'>
          <Input
            id='phone'
            tag='phone'
            label='Phone Number'
            mask='+1 999 9999 999'
            name='phone'
            onChange={handleInputChange}
          />
        </div>
        <div className='w-full'>
          <Radio
            options={options}
            caption='Select Subject?'
            name='subject'
            onChange={handleRadioChange}
          />
        </div>
        <div className='w-full'>
          <Input
            id='message'
            label='Message'
            name='message'
            placeholder='Write your message..'
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button type='submit' className={stylesBtn.btn}>
        Send Message
      </button>
    </form>
  );
};

export default ContactUsForm;
