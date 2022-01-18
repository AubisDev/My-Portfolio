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
      }
    },
  },
  plugins: [],
}
