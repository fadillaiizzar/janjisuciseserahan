/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },

      colors: {
        ccream: "#F5F2DC", 
        cmaroon: "#8C0D1C", 
      },

      screens: {
        'cust': '1102px',
        'cust2': '400px',
      },
    },
  plugins: [],
  }
}