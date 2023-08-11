'use client';
import { createMessage } from '@/services/createMessage';
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

  const handleRadioChange = (selectedValue: { [key: string]: string }) => {
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
      <div className='grid md:grid-cols-2 gap-y-5 gap-x-9 xl:gap-x-[39px] xl:gap-y-[45px] mb-[25px] xl:mb-[45px]'>
        <div className='w-full'>
          <Input
            id='firstName'
            name='firstName'
            label='First Name'
            onChange={handleInputChange}
          />
        </div>
        <div className='w-full'>
          <Input
            id='lastName'
            name='lastName'
            label='Last Name'
            onChange={handleInputChange}
          />
        </div>
        <div className='w-full'>
          <Input
            id='email'
            label='Email'
            type='email'
            name='email'
            onChange={handleInputChange}
          />
        </div>
        <div className='w-ful'>
          <Input
            id='phone'
            tag='phone'
            label='Phone Number'
            mask='+1 999 9999 999'
            name='phone'
            onChange={handleInputChange}
          />
        </div>
        <div className='w-full col-span-full'>
          <Radio
            options={options}
            caption='Select Subject?'
            name='subject'
            onChange={handleRadioChange}
          />
        </div>
        <div className='w-full col-span-full	'>
          <Input
            id='message'
            label='Message'
            name='message'
            placeholder='Write your message..'
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className='flex md:justify-end'>
        <button type='submit' className='button'>
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactUsForm;
