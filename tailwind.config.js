/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        emerald: {
          400: '#4ade80',
        },
        violet: {
          400: '#a78bfa',
        },
        blue: {
          400: '#60a5fa',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
      },
    },
  },
  plugins: [],
};
