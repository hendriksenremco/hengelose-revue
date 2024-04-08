<template>
  <Box v-editable="blok" class="container">
    <StoryblokComponent v-for="blokBody in blok.blocks" :key="blokBody._uid" :blok="blokBody" />
  </Box>
</template>
<script setup>
defineProps({ blok: Object })
</script>
