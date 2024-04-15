<template>
  <NuxtLink v-if="blok.url" :to="blok.url.cached_url" :target="blok.url.target">
    <NuxtImg :src="blok.image?.filename" />
  </NuxtLink>
  <img v-else :src="blok.image?.filename">
</template>
<script setup>
defineProps({ blok: Object })
</script>
