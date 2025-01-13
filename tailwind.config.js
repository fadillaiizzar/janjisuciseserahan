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
        'cust3': '736px',
        'cust4': '640px',
        'cust5': '622px',
      },

      backgroundImage: {
        'project': "url('/image/bgproject.png')",
      },
    },
  plugins: [],
  }
}