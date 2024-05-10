/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cf: "integralcf-bold, ui-serif",
        poppins: "poppins,ui-serif",
      },
      colors: {
        primary: "#FFFFFF",
        secondary: "#F2F0F1",
      },
      screens:{
        lowSm:"432px"
      } 
    },
  },
  plugins: [],
};
