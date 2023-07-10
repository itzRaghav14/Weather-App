/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hot': "url('https://image.lexica.art/full_jpg/be9b64e1-d8fd-448e-afcd-585d089be8d4')",
        'cold': "url('https://image.lexica.art/full_jpg/211eda68-aa32-4d9d-b2bf-ad1ed4918151')",
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

