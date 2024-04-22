<template>
  <Container :class="$style['layout']">
    <section>
      <StoryblokComponent v-for="blokBody in blok.main" :key="blokBody._uid" :blok="blokBody" />
    </section>
    <aside>
      <StoryblokComponent v-for="blokBody in blok.aside" :key="blokBody._uid" :blok="blokBody" />
    </aside>
  </Container>
</template>
<script setup>
defineProps({ blok: Object })
</script>
<style lang="scss" module>
.layout {
  display: grid;
  grid-template-columns: 1fr 300px;

  @media (max-width: 70rem) {
    grid-template-columns: 1fr;
  }
}
</style>
