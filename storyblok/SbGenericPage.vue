<template>
  <StoryblokComponent v-for="blokBody in blok.blocks" :key="blokBody._uid" :blok="blokBody" />
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
