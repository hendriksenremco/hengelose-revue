<template>
  <Container>
    <h1>{{ blok.title }}</h1>
    <SbText :blok="blok" />
    <Gallery :items="blok.items" />
  </Container>
  <!-- <StoryblokComponent v-for="blokBody in blok.blocks" :key="blokBody._uid" :blok="blokBody" /> -->
</template>
<script setup>
defineProps({ blok: Object })
</script>
