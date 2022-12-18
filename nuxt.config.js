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
})
