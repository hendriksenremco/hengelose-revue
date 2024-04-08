<template>
  <Hero>

    <template #background>
      <StoryblokComponent v-for="blokBody in blok.background" :key="blokBody._uid +'bg'" :blok="blokBody" />
      <!-- <iframe
        src="https://player.vimeo.com/video/930273080?h=2bf59c32b3&background=1"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen /> -->
    </template>
    <StoryblokComponent v-for="blokBody in blok.content" :key="blokBody._uid +'content'" :blok="blokBody" />

    <template #actions>
      <StoryblokComponent v-for="blokBody in blok.actions" :key="blokBody._uid  +'actions'" :blok="blokBody" />
    </template>
  </Hero>
</template>
<script setup>
defineProps({ blok: Object })
</script>
