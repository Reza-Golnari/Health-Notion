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
        'switzer-black': 'Switzer-Black'
      },
      colors:{
        primary: '#1B4D3E',
        secondary: '#8E9779',
        bg: '#F5F5F5',
        dark: '#212322',
      }
    },
  },
  plugins: [],
}