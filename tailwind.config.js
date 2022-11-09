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
    // screens: {
    //   'sm': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'md': '768px',
    //   // => @media (min-width: 768px) { ... }

    //   'lg': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'xl': '1280px',
    //   // => @media (min-width: 1280px) { ... }

    //   '2xl': '1536px',
    //   // => @media (min-width: 1536px) { ... }
    //   '3xl': '2560px',
    //   // => @media (min-width: 1536px) { ... }
    // },

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
      'primary': '#012B48',
      'secondary': '#75D0EE',
      'green': '#D6E869',
      'navbg': '#031E30',

    },
    screens: {
      '3xl': '1700px',
    },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide','tailwindcss/colors')
  ],
}
