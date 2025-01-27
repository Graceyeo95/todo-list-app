/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#111827',
        light: '#f9fafb',
        blue: '#3b82f6',
        red: '#dc2626',
        green: '#16a34a',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
