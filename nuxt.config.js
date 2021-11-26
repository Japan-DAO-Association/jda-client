import colors from 'vuetify/es5/util/colors'

export default {
  // 404 routing
  // router: {
  //   extendRoutes(routes, resolve) {
  //     routes.push({
  //       name: '404 error',
  //       path: '*',
  //       // component: resolve('~/pages/404.vue')
  //       component: resolve(__dirname, 'pages/404.vue'),
  //     })
  //   },
  // },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#',
    },
    titleTemplate: '%s - jda-client',
    title: 'jda-client',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'og:site_name', property: 'og:site_name', content: '' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: '' },
      { hid: 'og:title', property: 'og:title', content: '' },
      { hid: 'og:description', property: 'og:description', content: '' },
      { hid: 'og:image', property: 'og:image', content: '画像のURL' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: {
    color: 'blue',
    height: '10px',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/sass/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://www.npmjs.com/package/@nuxtjs/dotenv
    '@nuxtjs/dotenv',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://i18n.nuxtjs.org/
    [
      '@nuxtjs/i18n',
      {
        locales: [
          { code: 'ja', name: 'Japanese', iso: 'ja-JP', file: 'ja.json' },
          { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' },
        ],
        defaultLocale: 'en',
        langDir: 'locales/',
        strategy: 'no_prefix',
        vueI18n: {
          fallbackLocale: 'en',
        },
        vueI18nLoader: true,
        lazy: true,
        detectBrowserLanguage: {
          alwaysRedirect: true,
          fallbackLocale: 'en',
          useCookie: true,
          coookieKey: 'i18n_redirected',
        },
        seo: true,
      },
    ],
  ],
  
  env: {
    // BASE_HOST: process.env.BASE_HOST,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: process.env.API_URL
  },

  publicRuntimeConfig: {

  },

  privateRuntimeConfig: {
    
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Server Middleware
  serverMiddleware: {
    // '/api': '~/api'
  },

  // Host and Port
  // server: {
  //   host: process.env.NODE_ENV === 'development' ? process.env.BASE_HOST : process.env.BASE_PROD_HOST,
  //   port: process.env.NODE_ENV === 'development' ? 3000 : process.env.PORT,
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  cli: {
    bannerColor: 'yellow',
  },

  generate: {
    interval: 2000,
  },
}
