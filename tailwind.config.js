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

    extend: {

      colors: {


        // 'primary': 'black',
         'primary': '#0c25b3',
        // 'primary': '#070C20',
        // 'primary': '#012B48',
        'secondary': '#75D0EE',
        // 'green': '#E4AB00',
        // 'green': '#1ADBDA',
         'green': '#D6E869',
        // 'green': '#3EE8E5',
        // 'navbg': '#OA3',
        // 'navbg': '#2E302E',
         'navbg': '#050e80',
        // 'navbg': '#031E30',
        // 'primary': '#00007A',
        // // 'primary': '#012B48',
        // 'secondary': '#75D0EE',
        // // 'green': '#E4AB00',
        // 'green': '#D6E869',
        // 'navbg': '#00004D',
        // // 'navbg': '#031E30',

      },
      screens: {
        '3xl': '1700px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide', 'tailwindcss/colors')
  ],
}
