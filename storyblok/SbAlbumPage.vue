<template>
  <LazyContainer>
    <h1>{{ blok.title }}</h1>
    <LazySbText :blok="blok" />
    <LazyGallery :items="blok.items" />
  </LazyContainer>
  <!-- <StoryblokComponent v-for="blokBody in blok.blocks" :key="blokBody._uid" :blok="blokBody" /> -->
</template>
<script setup>
const img = useImage()
const route = useRoute()
const props = defineProps({ blok: Object })

const images = props.blok.items.map(item => {
  return {
    '@type': 'ImageObject',
    url: img(item.filename, { format: 'webp' }),
    caption: `${props.blok.title} afbeelding ${item.id}`
  }
})

useHead({
  title: props.blok?.title,
  meta: [
    { name: 'description', content: props.blok?.description }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: {
        '@context': 'https://schema.org',
        '@type': 'ImageGallery',
        name: props.blok.title,
        description: `Impressie van ${props.blok.title}`,
        url: `https://hengeloserevue.nl/${route.fullPath}`,
        image: images,
        publisher: {
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
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'NL',
            addressLocality: 'Hengelo',
            streetAddress: 'Torenlaan 5 3',
            postalCode: '7559 PK'
          },
          telephone: '074 291 8579'

        }
      }
    }
  ]
})
</script>
