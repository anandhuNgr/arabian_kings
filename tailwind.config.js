module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
      
      animation: {
        tada: 'tada 1s ease infinite',
      },
      keyframes: {
        tada: {
          '0%': { transform: 'scale(1)' },
          '10%': { transform: 'scale(1.1) rotate(3deg)' },
          '20%': { transform: 'scale(1) rotate(-3deg)' },
          '30%': { transform: 'scale(1.1) rotate(3deg)' },
          '40%': { transform: 'scale(1) rotate(0deg)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'], // Add Inter font
      poppins: ['Poppins', 'sans-serif'], // Add Poppins font
      playfair: ['Playfair Display', 'serif'], // Add Playfair font
    },
  },
  plugins: [],
};
