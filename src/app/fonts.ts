import { Inter, Manrope, Poppins, Roboto } from 'next/font/google';

export const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export const inter = Inter({
  weight: ['800'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const manrope = Manrope({
  weight: ['500'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});
