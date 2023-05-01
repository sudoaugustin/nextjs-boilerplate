/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: { brand: colors.sky, error: colors.red },
      animation: {
        progress: 'progress 0.75s linear infinite normal none',
        'fade-in': 'fade-in var(--t) cubic-bezier(0.32, 0, 0.64, 0) var(--d) both',
        'fade-out': 'fade-out var(--t) cubic-bezier(0.32, 0, 0.64, 0) var(--d) both',
        'scale-in': 'scale-in var(--t) cubic-bezier(0.32, 0, 0.64, 0) var(--d) both',
        'scale-out': 'scale-out var(--t) cubic-bezier(0.32, 0, 0.64, 0) var(--d) both',
        'slide-infinite': 'slide-infinite 2.5s linear infinite',
      },
      keyframes: {
        progress: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'fade-in': {
          '0%': { opacity: 'var(--o)', transform: 'translate(var(--x), var(--y))' },
          '100%': { opacity: '1', transform: 'translate(0, 0)' },
        },
        'fade-out': {
          '0%': { opacity: 'var(--o)', transform: 'translate(0, 0)' },
          '100%': { opacity: '0', transform: 'translate(var(--x), var(--y))' },
        },
        'scale-in': {
          '0%': { opacity: 'var(--o)', transform: 'scale(var(--s))' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'scale-out': {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(var(--s))' },
        },
        'slide-infinite': {
          '0%': { transform: 'translateY(-5px)' },
          '100%': { transform: 'translateY(60px)' },
        },
      },
      transitionDelay: { 0: '0ms' },
      transitionDuration: { 250: '250ms', 350: '350ms', 400: '400ms' },
    },
    fontFamily: {
      mono: ['var(--font-mono)', ...fontFamily.mono],
      sans: ['var(--font-sans)', ...fontFamily.sans],
      serif: ['var(--font-serif)', ...fontFamily.serif],
    },
  },
  content: [
    './pages/**/*.{ts,tsx}',
    './icons/**/*.{ts,tsx}',
    './views/**/*.{ts,tsx}',
    './layouts/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  plugins: [
    require('tailwindcss-radix'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.flex-center': {
          'align-items': 'center',
          'justify-content': 'center',
        },
      });
    }),
  ],
};
