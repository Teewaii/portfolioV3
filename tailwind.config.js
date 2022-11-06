/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
    },
    fontFamily: {
      'playfair': ['Playfair Display']
    }
    ,
    container: {
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '3rem',
        xl: '1rem',

      },

      center: true,
    },
    colors: {
      'primary': '#012B48',
      'secondary': '#75D0EE',
      'green': '#D6E869',

    },
    backgroundImage: {
      'spiral-lg': "url('../src/img/spiral-lg.svg')",
      'spiral-mob': "url('../src/img/spiral-mob.svg')",
      'spiral-about': "url('../src/img/spiral-mob2.png')",
      'exp': "url('../src/img/experience.svg')",
      'Contact': "url('../src/img/Contact.svg')",
      'About': "url('../src/img/About.svg')",
      'hdsabout': "url('../src/img/shot.svg')",
      'bkg': "url('../src/img/bkg.jpg')",
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
