<template>
  <LazyContainer>
    <h1>{{ blok.title }}</h1>
    <LazySbText :blok="blok" />
    <LazyGallery :items="blok.items" />
  </LazyContainer>
  <!-- <StoryblokComponent v-for="blokBody in blok.blocks" :key="blokBody._uid" :blok="blokBody" /> -->
</template>
<script setup>
const { formatAlbum } = useHrMeta()
const props = defineProps({ blok: Object })

formatAlbum(props.blok.title, props.blok.descritpion, props.blok.items)
</script>
