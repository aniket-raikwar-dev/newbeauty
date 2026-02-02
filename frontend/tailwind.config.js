/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // make sure all your React files are included
  ],
  theme: {
    extend: {
      colors: {
        pinkPastel: "#FDECEF",
        pinkSoft: "#FFF1F5",
        pinkAccent: "#9D174D",
      },
      fontFamily: {
        cursive: ["'Playfair Display', cursive"], // for headings
        sans: ["'Poppins', sans-serif"],          // for body text
      },
    },
  },
  plugins: [],
};
