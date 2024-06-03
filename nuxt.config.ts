// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  vite: {
    plugins: [
      svgLoader({
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false
                }
              }
            }
          ]
        }
      })
    ]
  },
  modules: ['@storyblok/nuxt', '@vite-pwa/nuxt', '@nuxt/image'],

  storyblok: {
    accessToken: 'Jehol4gVSqVfcrlkszKyhgtt'
  },

  image: {
    domains: [
      'a.storyblok.com'
    ],
    storyblok: {
      baseURL: 'https://a.storyblok.com'
    }
  },

  pwa: {
    manifest: {
      name: 'Hengelose Revue | Dé Twentse Revue',
      short_name: 'Hengelose Revue',
      theme_color: '#272625'
    },
    pwaAssets: {
      config: true
    }
  },
  hooks: {
    'vite:extendConfig': (config, { isClient }) => {
      if (isClient) { config.resolve.alias.vue = 'vue/dist/vue.esm-bundler.js' }
    }
  }
})
