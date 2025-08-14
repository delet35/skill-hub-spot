import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0D1B2A',
        gold: '#C2A878',
        char: '#2F3E46',
        cream: '#F6F3EE',
      },
      borderRadius: { '2xl': '1rem' },
      boxShadow: { glass: '0 10px 30px rgba(13,27,42,.08)' },
      backdropBlur: { glass: '22px' },
    },
  },
  plugins: [],
} satisfies Config;
