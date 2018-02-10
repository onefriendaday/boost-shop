module.exports = {
  plugins: [
    '~/plugins/components',
    '~/plugins/api',
    '~/plugins/portal',
    '~/plugins/i18n.js'
  ],
  router: {
    middleware: 'i18n'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'boost',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js ecommerce' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '//fonts.googleapis.com/css?family=Montserrat:400,400italic,500,600,700,700italic'
      },
      {
        rel: 'stylesheet',
        href: '//fonts.googleapis.com/css?family=Work+Sans:400,400italic,500,600,700,700italic'
      },
      {
        rel: 'stylesheet',
        href: '//fonts.googleapis.com/css?family=Libre+Baskerville:400,400italic,500,600,700,700italic'
      },
      {
        rel: 'stylesheet',
        href: '/css/styles.css'
      },
    ],
    script: [
      {
        src: '//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js',
        body: true
      },
      {
        src: '/js/app.js',
        body: true
      },
      {
        src: '/js/roomle.js',
        body: true
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
