/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // or 'media' or 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '15vh': '15vh',
        '20vh': '20vh',
        '25vh': '25vh',
        '35vh': '35vh',
        '40vh': '40vh',
        '45vh': '45vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '75vh': '75vh',
        '80vh': '80vh',
        '90vh': '90vh',
      },

      height: {
        '15vh': '15vh',
        '20vh': '20vh',
        '25vh': '25vh',
        '35vh': '35vh',
        '40vh': '40vh',
        '45vh': '45vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '75vh': '75vh',
        '80vh': '80vh',
        '90vh': '90vh',
      },

      minHeight: {
        '15vh': '15vh',
        '20vh': '20vh',
        '25vh': '25vh',
        '35vh': '35vh',
        '40vh': '40vh',
        '45vh': '45vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '75vh': '75vh',
        '80vh': '80vh',
        '90vh': '90vh',
      },

      maxHeight: {
        '15vh': '15vh',
        '20vh': '20vh',
        '25vh': '25vh',
        '35vh': '35vh',
        '40vh': '40vh',
        '45vh': '45vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '75vh': '75vh',
        '80vh': '80vh',
        '90vh': '90vh',
      },

      backgroundImage: (theme) => ({
        sun: "url('/src/resources/images/styles/sun.png')",
        moon: "url('/src/resources/images/styles/moon.png')",
        "half-moon": "url('/src/resources/images/styles/half-moon.png')",
      }),
    },
  },
  plugins: [],
}

