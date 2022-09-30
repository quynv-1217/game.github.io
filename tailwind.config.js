/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    screens: {
      vs: '320px',
      ls: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
      xxxl: '1800px',
    },
    extend: {
      colors: {
        bluedark: '#0D2755',
        primary: '#00FFFF',
        secondary: '#575757',
        purplePrimary: '#683CB8',
        darkRed: '#6f2a08',
        'primary-dark': '#123A84',
      },
      fontFamily: {
        ale: ['sans-serif']
      }
    }
  },
  variants: {
    extend: {
      visibility: ['hover', 'group-hover'],
      borderRadius: ['first', 'last'],
      borderWidth: ['first', 'last'],
      ringWidth: ['hover'],
      zIndex: ['hover'],
      maxHeight: ['group-hover']
    }
  },
  purge: [
    './src/**/*.html',
    './src/**/*.vue'
  ]
}
