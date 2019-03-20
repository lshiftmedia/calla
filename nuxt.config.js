const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Calla Legal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A boutique law firm specializing in workplace investigations.' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:600' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Merriweather:400,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
    ],
    script: [
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/components.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['storyblok-nuxt', {
      accessToken: '6clw5VrHehThS1lr9DIhuAtt',
      cacheProvider: 'memory'
    }]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
