<template>
  <LazyContainer
    v-editable="blok"
    :no-padding="blok.noPadding"
    :no-padding-top="blok.noPaddingTop"
    :full-width="blok.fullWidth"
    :full-height="blok.fullHeight">
    <StoryblokComponent v-for="blokBody in blok.blocks" :key="blokBody._uid" :blok="blokBody" />
  </LazyContainer>
</template>
<script setup>
defineProps({ blok: Object })
</script>
