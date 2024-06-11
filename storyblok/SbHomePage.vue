<template>
  <StoryblokComponent v-for="blokBody in blok.blocks" :key="blokBody._uid" :blok="blokBody" />
</template>
<script setup>
const props = defineProps({ blok: Object })
const { formatHome } = useHrMeta()
useHead({
  title: props.blok?.title,
  meta: [
    props.blok?.description ? { name: 'description', content: props.blok?.description } : null
  ]
})

formatHome(props.blok?.title, props.blok?.description)
</script>
