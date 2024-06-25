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
    accessToken: 'Jehol4gVSqVfcrlkszKyhgtt',
    bridge: false,
    devtools: false
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
      name: 'Hengelose Revue | Meer dan theater...',
      short_name: 'Hengelose Revue',
      theme_color: '#000000',
      description: '"Effe Wachten" in de Schouwburg Hengelo. 31 januari, 1, 2, 5, 6 en 7 februari 2025! Koop nu je kaarten!',
      screenshots: [
        {
          src: '/pwa/screenshot-narrow-1.jpg',
          sizes: '630x1200',
          type: 'image/jpg',
          form_factor: 'narrow',
          label: 'Hengelose Revue'
        },
        {
          src: '/pwa/screenshot-narrow-2.jpg',
          sizes: '630x1200',
          type: 'image/jpg',
          form_factor: 'narrow',
          label: 'Hengelose Revue'
        },
        {
          src: '/pwa/screenshot-narrow-3.jpg',
          sizes: '630x1200',
          type: 'image/jpg',
          form_factor: 'narrow',
          label: 'Hengelose Revue'
        },
        {
          src: '/open-graph.jpg',
          sizes: '1200x630',
          type: 'image/jpg',
          form_factor: 'wide',
          label: 'Hengelose Revue'
        },
        {
          src: '/open-graph-2.jpg',
          sizes: '1200x630',
          type: 'image/jpg',
          form_factor: 'wide',
          label: 'Hengelose Revue'
        },
        {
          src: '/open-graph-3.jpg',
          sizes: '1200x630',
          type: 'image/jpg',
          form_factor: 'wide',
          label: 'Hengelose Revue'
        }
      ]
    },
    pwaAssets: {
      config: true
    },
    devOptions: {
      enabled: true,
      type: 'module'
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
  },
  routeRules: {
    '/verhuurfolder': { redirect: { to: '/verhuur/', statusCode: 301 } },
    '/filmpjes': { redirect: { to: '/impressie/achter-de-schermen', statusCode: 301 } },
    '/sponsoren': { redirect: { to: '/sponsoring/', statusCode: 301 } },
    '/videos-2023': { redirect: { to: '/impressie/2023-hoge-nood', statusCode: 301 } }
  },
  runtimeConfig: {
    mysqlHost: process.env.NUXT_MYSQL_HOST,
    mysqlUser: process.env.NUXT_MYSQL_USER,
    mysqlPassword: process.env.NUXT_MYSQL_PASSWORD,
    mysqlDatabase: process.env.NUXT_MYSQL_DATABASE,
    mysqlPort: process.env.NUXT_MYSQL_PORT,
    mailHost: process.env.NUXT_MAIL_HOST,
    mailPort: process.env.NUXT_MAIL_PORT,
    mailUser: process.env.NUXT_MAIL_USER,
    mailPassword: process.env.NUXT_MAIL_PASSWORD,
    mailTo: process.env.NUXT_MAIL_TO
  }
})
