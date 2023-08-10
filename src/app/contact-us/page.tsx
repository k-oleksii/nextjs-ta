import ContactUs from '@/components/contact-us';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
};

export default function ContactUsPage() {
  return <ContactUs />;
}
