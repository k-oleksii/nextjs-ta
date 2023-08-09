import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      secondary: {
        bg: '#fbfbfb',
        charcoalBlack: '#1e1e1e',
        jetBlack: '#131313',
        grey: '#616161',
        darkGray: '#1f1f1f',
        mediumGray: '#717171',
        silverGray: '#8d8d8d',
        lightGray: '#e0e0e0',
        lightSilver: '#c9c9c9',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        roboto: ['var(--font-roboto)'],
        manrope: ['var(--font-manrope)'],
        inter: ['var(--font-inter)'],
      },
      fontSize: {
        xs: ['11px', '18px'],
        '2xs': ['12px', '18px'],
        '3xs': ['13px', '20px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['18px', '26px'],
        xl: ['20px', '32px'],
        '2xl': ['24px', '32px'],
        '3xl': ['28px', '36px'],
        '4xl': ['36px', '42px'],
        '5xl': ['40px', '50px'],
      },
    },
  },
  plugins: [],
};
export default config;
