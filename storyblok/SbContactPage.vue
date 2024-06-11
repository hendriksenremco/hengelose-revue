<template>
  <div :class="$style['layout__header']">
    <StoryblokComponent v-for="blokBody in blok.header" :key="blokBody._uid" :blok="blokBody" />
  </div>
  <LazyContainer :class="$style['layout']">
    <section :class="$style['layout__main']">
      <StoryblokComponent v-for="blokBody in blok.main" :key="blokBody._uid" :blok="blokBody" />
    </section>
    <aside :class="$style['layout__aside']">
      <StoryblokComponent v-for="blokBody in blok.aside" :key="blokBody._uid" :blok="blokBody" />
    </aside>
  </LazyContainer>
</template>
<script setup>
const { formatContact } = useHrMeta()
const props = defineProps({ blok: Object })

formatContact(props.blok.title, props.blok.description)
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
