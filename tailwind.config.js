/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A4161A',
        'primary-hover': '#BA181B',
        secondary: '#161A1D',
        'text-primary': '#0B090A',
        'text-secondary': '#B1A7A6',
        'background-light': '#F5F3F4',
        'background-dark': '#0B090A',
      },
    },
  },
  plugins: [],
}