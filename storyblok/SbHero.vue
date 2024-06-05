<template>
  <LazyHero>
    <template #background>
      <StoryblokComponent v-for="blokBody in blok.background" :key="blokBody._uid +'bg'" :blok="blokBody" />
    </template>
    <StoryblokComponent v-for="blokBody in blok.content" :key="blokBody._uid +'content'" :blok="blokBody" />

    <template #actions>
      <StoryblokComponent v-for="blokBody in blok.actions" :key="blokBody._uid +'actions'" :blok="blokBody" />
    </template>
  </LazyHero>
</template>
<script setup>
defineProps({ blok: Object })
</script>
