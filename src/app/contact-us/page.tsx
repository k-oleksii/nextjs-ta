// Core
import { Metadata } from 'next';

// Components
import ContactUs from '@/components/contact-us/ContactUs';

export const metadata: Metadata = {
  title: 'Contact Us',
};

export default function ContactUsPage() {
  return <ContactUs />;
}
