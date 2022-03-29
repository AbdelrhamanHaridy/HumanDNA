export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'HumanDNA',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/assets/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/assets/css/aos.css' },
      { rel: 'stylesheet', href: '/assets/css/animate.min.css' },
      { rel: 'stylesheet', href: '/assets/css/meanmenu.css' },
      { rel: 'stylesheet', href: '/assets/css/remixicon.css' },
      { rel: 'stylesheet', href: '/assets/css/odometer.min.css' },
      { rel: 'stylesheet', href: '/assets/css/fancybox.min.css' },
      { rel: 'stylesheet', href: '/assets/css/style.css' },
      { rel: 'stylesheet', href: '/assets/css/fostyleoter.css' },
      { rel: 'stylesheet', href: '/assets/css/navbar.css' },
      { rel: 'stylesheet', href: '/assets/css/footer.css' },
      { rel: 'stylesheet', href: '/assets/css/responsive.css' },
    ],
    script: [
      { src: '/assets/js/bootstrap.bundle.min.js' },
      { src: '/assets/js/wow.min.js' },
      { src: '/assets/js/aos.js' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
