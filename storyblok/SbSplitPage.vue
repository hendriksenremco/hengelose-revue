<template>
  <div :class="$style['layout__header']">
    <StoryblokComponent v-for="blokBody in blok.header" :key="blokBody._uid" :blok="blokBody" />
  </div>
  <Container :class="$style['layout']">
    <section :class="$style['layout__main']">
      <StoryblokComponent v-for="blokBody in blok.main" :key="blokBody._uid" :blok="blokBody" />
    </section>
    <aside :class="$style['layout__aside']">
      <StoryblokComponent v-for="blokBody in blok.aside" :key="blokBody._uid" :blok="blokBody" />
    </aside>
  </Container>
</template>
<script setup>
const props = defineProps({ blok: Object })
useHead({
  title: props.blok?.title,
  meta: [
    props.blok?.description ? { name: 'description', content: props.blok?.description } : null
  ]
})
</script>
<style lang="scss" module>
.layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 25rem;
  gap: var(--spacing-xxl);
  min-width: 0;

  @media (width <= 70rem) {
    grid-template-columns: minmax(0, 1fr);
    padding: var(--spacing-xl);
  }

  &__aside {
    padding: var(--spacing-l);
  }
}
</style>
