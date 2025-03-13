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
        'scroll-text-left': 'scroll-text-left 20s linear infinite',
      },
      keyframes: {
        'scroll-text-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
