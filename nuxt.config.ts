// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  devtools: { enabled: true },
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
  modules: ['@storyblok/nuxt', '@nuxt/image', '@vite-pwa/nuxt'],

  storyblok: {
    accessToken: 'Jehol4gVSqVfcrlkszKyhgtt'
  },

  image: {
    domains: [
      'a.storyblok.com'
    ]
  },

  pwa: {
    manifest: {
      name: 'Hengelose Revue | Dé Twentse Revue'
    }
  }
})
