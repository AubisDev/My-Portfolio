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
        'neon': '150px 20px 75px 25px rgba( 255, 140, 18, 0.5)',
        'neon2': '-150px -20px 75px 25px rgba( 0, 255, 255 , 0.50)',
        'neon3': '-150px 30px 75px 25px #ff8c12',
        'neon4': '150px -30px 75px 25px #0ff',
      },
      dropShadow:{
        'items-logo': '0px 35px 30px rgba(0, 255, 255, 0.5)',
        'items-logo2': '0px 35px 35px rgba(255, 153, 64, 0.5)'
      },
      backgroundColor:{
        'card' :'linear-gradient(to left, #333, #333 50%, #eee 75%, #333 75%)'
      }
    },
  },
  plugins: [],
}
