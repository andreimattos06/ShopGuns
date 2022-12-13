/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {

    fontFamily:{
      sans: ['Cairo', 'sans-serif']
    },
    
    extend: {

      backgroundImage: {
        'malha': "url('src/public/fundo.jpg')",        
      }

    },
  },
  plugins: [],
}
