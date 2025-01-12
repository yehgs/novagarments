import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '2000px',
    },
    extend: {
      colors: {
        primary: '#404040',
        secondary: '#101010',
        tertiary: '#999090',
        blue: '#004F88',
        accent: {
          DEFAULT: '#FF0000',
          hover: '#FF001b',
        },
      },
      fontSize: {
        h1: ['60px', { lineHeight: '70px' }],
        h1Mobile: ['43px', { lineHeight: '50px' }],
        h2: ['3rem', { lineHeight: '3.5rem' }],
        h3: ['2rem', { lineHeight: '2.5rem' }],
        h3Mobile: ['26px', { lineHeight: '32px' }],
        p: ['20px', { lineHeight: '28px' }],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
