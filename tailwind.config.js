/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hot': "url('./assets/images/bg-hot.jpg')",
        'cold': "url('./assets/images/bg-cold.jpg')",
      },
      borderWidth: {
        '0.5': '0.5px'
      },
      colors: {
        overlay: {
          section: '#000000A0',
          background: '#00000032'
        }
      }
    },
  },
  plugins: [],
}

