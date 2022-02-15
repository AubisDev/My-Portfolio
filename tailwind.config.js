module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'title' : ['Source Sans Pro', 'sans-serif'],
      'body' : [ 'Raleway', 'sans-serif']
    }
    ,
    extend: {
      height:{
        '50vh': '50vh'
      },
      backgroundImage: {
        'profile': "url('/src/img/Aubis.png')",
      },
      transformOrigin: {
        'tl': '0% 50%',
      },
      boxShadow: {
        'neon': '-10px 10px 3px 3px rgba( 0, 255, 255 , 0.2)',
        'neon2': '10px 10px 3px 3px rgba( 255, 140, 18, 0.2)',
        'neon3': '-150px 30px 75px 25px #ff8c12',
        'neon4': '5px -5px 50px 5px #000',
      },
      dropShadow:{
        'items-logo': '12px 12px 1px rgba(0, 0, 0, 0.3)',
        'items-logo2': '0px px 50px rgba(255, 153, 64, 0.3)',
        'social' : '50px 55px 35px #000',

      },
      backgroundColor:{
        'card' :'linear-gradient(to left, #333, #333 50%, #eee 75%, #333 75%)'
      }
    },
  },
  plugins: [],
}
//255, 140, 18, 0.5  0, 255, 255 , 0.50