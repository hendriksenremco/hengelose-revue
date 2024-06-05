// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'
import StoryblokClient from 'storyblok-js-client'
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
  nitro: {
    compressPublicAssets: {
      gzip: true
    }
  },

  modules: ['@storyblok/nuxt', '@vite-pwa/nuxt', '@nuxt/image', 'nuxt-gtag', '@nuxtjs/sitemap'],

  gtag: {
    id: 'G-7HZH59NMZH'
  },

  storyblok: {
    accessToken: 'Jehol4gVSqVfcrlkszKyhgtt'
  },

  sitemap: {
    exclude: [
      '/pers-kit',
      '/styleguide'
    ],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    },
    urls: async () => {
      const Storyblok = new StoryblokClient({
        accessToken: 'Jehol4gVSqVfcrlkszKyhgtt'
      })
      const links = await Storyblok.getAll('cdn/links', {
        version: 'published'
      })
      const urls = links.filter(link => !link.real_path.includes('global')).map(link => {
        return link.real_path
      })

      return urls
    }
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
  },
  sourcemap: {
    client: true,
    server: true
  }
})
