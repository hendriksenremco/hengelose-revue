<template>
  <AutoGrid :items="blok.blocks" :max-width="blok.maxWidth">
    <template #item="{ item }">
      <StoryblokComponent :blok="item" />
    </template>
  </AutoGrid>
</template>
<script setup>
defineProps({ blok: Object })
</script>
