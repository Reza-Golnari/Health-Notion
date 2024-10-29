/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}" , "./index.html"],
  theme: {
    extend: {
      fontFamily:{
        'switzer-Variable': 'Switzer-Variable',
        'switzer-thin': 'Switzer-Thin',
        'switzer-thinItalic': 'Switzer-ThinItalic',
        'switzer-extralight': 'Switzer-Extralight',
        'switzer-light': 'Switzer-Light',
        'switzer-regular': 'Switzer-Regular',
        'switzer-medium': 'Switzer-Medium',
        'switzer-semibold': 'Switzer-Semibold',
        'switzer-bold': 'Switzer-Bold',
        'switzer-extrabold': 'Switzer-Extrabold',
        'switzer-black': 'Switzer-Black',

        'roboto-thin' :'roboto-thin',
        'roboto-light' :'roboto-light',
        'roboto-regular' :'roboto-regular',
        'roboto-medium' :'roboto-medium',
        'roboto-bold' :'roboto-bold',
      },
      colors:{
        primary: '#1B4D3E',
        secondary: '#8E9779',
        secondaryBg: '#8E9779',
        primaryBg: '#303331',
        bg: '#F5F5F5',
        dark: {
          DEFAULT: '#212322',
          100: '#303030',
          200: '#191B1A'
        },
        text: '#757373',
        title: '#212322',
        gray: '#939393',
        bone: '#EDE1CF',
      },
      spacing: {
        18: '72px',
      },
    },
  },
  plugins: [],
}