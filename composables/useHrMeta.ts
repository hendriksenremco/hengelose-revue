export const useHrMeta = () => {
  const image = ['https://hengeloserevue.nl/open-graph.jpg']

  const description = '"Effe wachten" in de Schouwburg Hengelo. 31 januari, 1, 2, 5, 6 en 7 februari 2025! Koop nu je kaarten!'
  const address = {
    '@type': 'PostalAddress',
    addressCountry: 'NL',
    addressLocality: 'Hengelo',
    streetAddress: 'Torenlaan 5 3',
    postalCode: '7559 PK'
  }
  const telephone = '074 291 8579'

  const publisher = {
    '@type': 'Organization',
    '@id': 'https://hengeloserevue.nl#Organization',
    name: 'Hengelose Revue',
    url: 'https://hengeloserevue.nl',
    sameAs: [
      'https://www.facebook.com/profile.php?id=100057511687101&locale=nl_NL',
      'https://www.instagram.com/hengeloserevue/'
    ],
    logo: {
      '@type': 'ImageObject',
      url: 'https://hengeloserevue.nl/brand/logo/logo_fc.png',
      width: 2000,
      height: 478
    },
    address,
    telephone
  }

  const formatDefault = () => {
    useHead({
      titleTemplate: titleChunk => titleChunk ? `${titleChunk} - Hengelose Revue` : 'Hengelose Revue - Theater en meer...',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: description
        },
        {
          rel: 'preconnect',
          href: 'https://rsms.me',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preconnect',
          href: 'https://www.googletagmanager.com',
          crossorigin: 'anonymous'
        },
        {
          key: 'og:title',
          property: 'og:title',
          content: 'Hengelose Revue - Theater en meer...'
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: description
        },
        {
          key: 'og:site_name',
          property: 'og:site_name',
          content: 'Hengelose Revue'
        },
        {
          key: 'og:type',
          property: 'og:type',
          content: 'Website'
        },
        {
          key: 'og:url',
          property: 'og:url',
          content: 'https://hengeloserevue.nl'
        },
        {
          key: 'og:image',
          property: 'og:image',
          content: 'https://hengeloserevue.nl/open-graph.jpg'
        },
        {
          key: 'og:image-2',
          property: 'og:image',
          content: 'https://hengeloserevue.nl/open-graph-2.jpg'
        },
        {
          key: 'og:image-3',
          property: 'og:image',
          content: 'https://hengeloserevue.nl/open-graph-3.jpg'
        },
        {
          key: 'og:image:width',
          property: 'og:image:width',
          content: '1200'
        },
        {
          key: 'og:image:height',
          property: 'og:image:height',
          content: '630'
        },
        {
          key: 'og:image:type',
          property: 'og:image:type',
          content: 'image/jpeg'
        },
        {
          key: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: 'https://hengeloserevue.nl/open-graph.jpg'
        }
      ],
      htmlAttrs: {
        lang: 'nl'
      }
    })
  }

  const formatHome = (title: string, description: string) => {
    useHead({
      title,
      meta: [{ name: 'description', content: description }],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            url: 'https://hengeloserevue.nl',
            description,
            name: 'Hengelose Revue',
            inLanguage: 'nl-NL',
            image,
            publisher
          }
        }
      ]
    })
  }

  const formatEvent = (title: string, description: string, events: any) => {
    const ldJson = events.map(event => {
      return {
        type: 'application/ld+json',
        innerHTML: {
          '@context': 'http://schema.org',
          '@type': 'TheaterEvent',
          name: 'Effe Wachten... - De Hengelose Revue',
          startDate: event.content.date,
          description,
          image,
          location: {
            '@type': 'Place',
            name: 'Schouwburg Hengelo',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'NL',
              addressLocality: 'Hengelo',
              streetAddress: 'Beursstraat 44',
              postalCode: '7551 HV'
            },
            url: 'https://www.schouwburghengelo.nl/'
          },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'EUR',
            url: event.content.url.cached_url,
            availability: 'http://schema.org/InStock',
            price: '19.50'
          },
          performers: {
            '@type': 'TheaterGroup',
            url: 'https://hengeloserevue.nl/',
            name: 'De Hengelose Revue'
          }
        }
      }
    })

    useHead({
      title,
      meta: [{ name: 'description', content: description }],
      script: ldJson
    })
  }

  const formatAlbum = (title: string, description:string, items: any) => {
    const route = useRoute()
    const img = useImage()
    const images = items.map((item: any) => {
      return {
        '@type': 'ImageObject',
        url: img(item.filename, { format: 'webp' }),
        caption: `${title} afbeelding ${item.id}`
      }
    })
    useHead({
      title,
      meta: [{ name: 'description', content: description }],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: {
            '@context': 'https://schema.org',
            '@type': 'ImageGallery',
            name: title,
            description: `Impressie van ${title}`,
            url: `https://hengeloserevue.nl/${route.fullPath}`,
            image: images,
            publisher
          }
        }
      ]
    })
  }

  const formatContact = (title: string, description: string) => {
    useHead({
      title,
      meta: [{ name: 'description', content: description }],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://hengeloserevue.nl/contact'
            },
            url: 'https://hengeloserevue.nl',
            description,
            name: 'Hengelose Revue',
            inLanguage: 'nl-NL',
            image,
            publisher
          }
        }
      ]
    })
  }

  return { formatDefault, formatHome, formatEvent, formatAlbum, formatContact }
}
