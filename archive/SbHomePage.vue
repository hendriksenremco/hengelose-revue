<template>
  <StoryblokComponent v-for="blokBody in blok.body" :key="blokBody._uid" :blok="blokBody" />
</template>
<script setup>
const props = defineProps({ blok: Object })
</script>
