import colors from 'vuetify/es5/util/colors'

export default {// 404 routing
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: '404 error',
        path: '*',
        // component: resolve('~/pages/404.vue')
        component: resolve(__dirname, 'pages/index.vue'),
      })
    },
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en',
      prefix: 'og: http://ogp.me/ns#',
    },
    titleTemplate: '%s',
    title: 'Japan DAO Association',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Japan DAO Association is a Pear to Pear Job Matching Community. The purpose of this community is to increase the number of individuals who can make a living from DAOs.' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Japan DAO Association' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: '' },
      { hid: 'og:title', property: 'og:title', content: 'Japan DAO Association' },
      { hid: 'og:description', property: 'og:description', content: 'Japan DAO Association is a Pear to Pear Job Matching Community. The purpose of this community is to increase the number of individuals who can make a living from DAOs.' },
      { hid: 'og:image', property: 'og:image', content: 'https://jda-dao.org/ogp.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: 'DaoAssociation' },
      { name: 'twitter:title', content: 'Japan DAO Association' },
      { name: 'twitter:description', content: 'Japan DAO Association is a Pear to Pear Job Matching Community. The purpose of this community is to increase the number of individuals who can make a living from DAOs.' },
      { name: 'twitter:image', content: 'https://jda-dao.org/ogp.png' },
      { name: 'fb:app_id', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512x512.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: 'site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
    ],
    script: [
      {
        type: 'text/javascript',
        src: "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js",
        defer: true,
      },
    ]
  },

  loading: '~/components/Loading.vue',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/sass/main.scss',
    'aos/dist/aos.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/aos.js',
    { src: '@/plugins/cursorfx.js', ssr: false },
    { src: '@/plugins/vuetyper.js', ssr: false },
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
    // https://github.com/ivodolenc/nuxt-animejs
    'nuxt-animejs',
    // https://github.com/ivodolenc/nuxt-gsap-module
    'nuxt-gsap-module',
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
          { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' },
          { code: 'ja', name: 'Japanese', iso: 'ja-JP', file: 'ja.json' },
        ],
        defaultLocale: 'en',
        langDir: 'assets/locales/',
        strategy: 'no_prefix',
        vueI18n: {
          fallbackLocale: 'en',
        },
        vueI18nLoader: true,
        lazy: true,
        detectBrowserLanguage: {
          fallbackLocale: 'en',
          useCookie: false,
        },
        seo: true,
      },
    ],
    // https://github.com/nuxt-community/google-gtag-module
    [
      '@nuxtjs/google-gtag',
      {
        id: process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID,
        // debug: true,
        config: {
          // anonymize_ip: true,
          send_page_view: false,
        }
      }
    ]
  ],
  
  env: {
    // BASE_HOST: process.env.BASE_HOST,
  },

  // https://github.com/ivodolenc/nuxt-gsap-module
  gsap: {

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
    },
    icon: {
      source: '@/assets/images/jda-logo.svg',
      fileName: 'favicon-32x32.png'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    theme: {
      dark: false,
      themes: {
        disable: true,
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
