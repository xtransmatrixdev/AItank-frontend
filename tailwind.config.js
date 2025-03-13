// Tailwind CSS in `tailwind.config.js`
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#12131C",
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