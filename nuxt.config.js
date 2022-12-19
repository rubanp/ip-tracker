export default defineNuxtConfig({
  target: 'static',
  css: [
    'assets/css/main.css',
  ],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    vue: {
      reactivityTransform: true
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'IP Address Tracker',
      meta: [
        { name: 'description', content: 'An IP address tracker and finder using the IP Geolocation API and the Google Maps API' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.png' }
      ]
    }
  },
  build: { transpile: ["@fawmi/vue-google-maps"] },
  runtimeConfig: {
    public: { GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY },
  },
})
