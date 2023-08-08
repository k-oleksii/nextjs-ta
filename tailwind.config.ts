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
    },
  },
  plugins: [],
};
export default config;
