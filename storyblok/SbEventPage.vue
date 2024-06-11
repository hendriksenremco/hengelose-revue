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
const { formatEvent } = useHrMeta()
const props = defineProps({ blok: Object })
formatEvent(props.blok?.title, props.blok?.description, props.blok?.events)

</script>
<style module>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill,  minmax(15rem, 1fr));
  gap: var(--spacing-l);
}
</style>
