<template>
  <LazyContainer>
    <h1>{{ blok.title }}</h1>
    <LazySbText :blok="blok" />
    <LazyGallery :items="blok.items" />
  </LazyContainer>
  <!-- <StoryblokComponent v-for="blokBody in blok.blocks" :key="blokBody._uid" :blok="blokBody" /> -->
</template>
<script setup>
const props = defineProps({ blok: Object })
useHead({
  title: props.blok?.title,
  meta: [
    { name: 'description', content: props.blok?.description }
  ]
})
</script>
