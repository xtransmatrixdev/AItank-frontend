// Tailwind CSS in `tailwind.config.js`
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#000000',
      },
      animation: {
        'scroll-left': 'scroll-left 10s linear infinite',
      },
      keyframes: {
        'scroll-left': {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};