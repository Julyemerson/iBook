export default {
  head: {
    title: 'iBook',
    htmlAttrs: {
      lang: 'pt-BR',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Ibook - New way to read books online',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['normalize.css/normalize.css', '@/assets/scss/base.scss'],
  plugins: ['@/plugins/accessor'],
  components: [{ path: '@/components', pathPrefix: false }],
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/style-resources'],
  styleResources: {
    scss: ['@/components/bosons/*.scss'],
  },
  modules: ['@nuxtjs/axios', 'cookie-universal-nuxt'],
  axios: {
    baseURL: 'https://ibook-api.herokuapp.com',
  },
  build: {
    extractCSS: true,
  },
}
