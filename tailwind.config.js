/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "300px",
        '2k':"1900px",
      },
      colors:{
        'custom-blue':'#1A58A1',
        'custom-gray':'#B3B3B3',
      }
    },
  },
  plugins: [],
};
