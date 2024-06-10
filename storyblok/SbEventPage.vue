<template>
  <StoryblokComponent v-for="blokBody in blok.blocks" :key="blokBody._uid" :blok="blokBody" />
</template>
<script setup>
const props = defineProps({ blok: Object })

const ldJson = props.blok.events.map(event => {
  return {
    type: 'application/json',
    innerHTML: {
      '@context': 'http://schema.org',
      '@type': 'TheaterEvent',
      name: 'Effe Wachten... - De Hengelose Revue',
      startDate: event.content.date,
      description: 'Een show oordevol hilarische en komische toneelscènes, schitterende dansen en prachtige muziek van een live band en vier zangers..',
      image: 'https://hengeloserevue.nl/open-graph.jpg',
      location: {
        '@type': 'Place',
        name: 'Schouwburg Hengelo',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'NL',
          addressLocality: 'Hengelo',
          streetAddress: 'Beursstraat 44',
          postalCode: '7551 HV '
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
  title: props.blok?.title,
  meta: [
    props.blok?.description ? { name: 'description', content: props.blok?.description } : null
  ],
  script: ldJson
})

</script>
