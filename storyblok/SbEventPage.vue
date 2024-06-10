<template>
  <StoryblokComponent v-for="blokBody in blok.blocks" :key="blokBody._uid" :blok="blokBody" />
  <Container no-padding-top>
    <div :class="$style['grid']">
      <Card v-for="event in blok.events" image="https://hengeloserevue.nl/_ipx/f_webp/https://a.storyblok.com/f/283398/3010x1393/0a9bf9f642/424879762_2370238289853663_8769286620981178880_n.jpg">
        <b>{{ event.name }}</b>

        <template #actions>
          <Button
            icon="ExternalLink"
            with-border
            :to="event.content.url.cached_url"
            target="_blank"
            icon-pos="right"
            color="transparent">
            Bestel kaarten
          </Button>
        </template>
      </Card>
    </div>
  </Container>
</template>
<script setup>
const props = defineProps({ blok: Object })

const ldJson = props.blok.events.map(event => {
  return {
    type: 'application/ld+json',
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
<style module>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill,  minmax(15rem, 1fr));
  gap: var(--spacing-l);
}
</style>
