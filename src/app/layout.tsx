import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import '@/styles/globals.scss';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import { inter, manrope, poppins, roboto } from './fonts';

export const metadata: Metadata = {
  title: 'Next.js Front-End Technical Assessment',
  description:
    'This is a Mbunity Development technical assessment for potential Next.js Frontend Engineer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${roboto.variable} ${poppins.variable} ${manrope.variable}`}
      >
        <Header />
        <Suspense>
          <main>{children}</main>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
