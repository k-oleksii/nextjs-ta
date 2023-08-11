// Tailwindcss
import { PluginAPI } from 'tailwindcss/types/config';
const plugin = require('tailwindcss/plugin');

// Button Plugin
module.exports = plugin(function ({ addComponents }: PluginAPI) {
  const button = {
    '.button': {
      width: '100%',
      padding: '9px 10px',
      backgroundColor: '#000',
      fontWeight: '500',
      fontSize: '13px',
      lineHeight: '20px',
      color: '#fff',
      borderRadius: '3px',
      cursor: 'pointer',
      transition: 'all 0.15s ease-in-out',

      '&:hover': {
        backgroundColor: '#262626',
      },

      '@media (min-width: 640px)': {
        width: 'auto',
        padding: '15px 48px',
        borderRadius: '5px',
      },

      '@media (min-width: 1024px)': {
        fontSize: '16px',
        lineHeight: '24px',
      },
    },
  };

  addComponents(button);
});
