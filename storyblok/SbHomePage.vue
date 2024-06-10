<template>
  <StoryblokComponent v-for="blokBody in blok.blocks" :key="blokBody._uid" :blok="blokBody" />
</template>
<script setup>
const props = defineProps({ blok: Object })
useHead({
  title: props.blok?.title,
  meta: [
    props.blok?.description ? { name: 'description', content: props.blok?.description } : null
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        url: 'https://hengeloserevue.nl',
        description: 'Theater en meer... "Effe wachten" in de Schouwburg Hengelo. 31 januari, 1, 2, 5, 6 en 7 februari 2025! Koop nu je kaarten!',
        name: 'Hengelose Revue',
        inLanguage: 'nl-NL',
        image: ['https://hengeloserevue.nl/open-graph.jpg'],
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
