<template>
  <LazyAutoGrid v-editable="blok" :items="blok.blocks" :max-width="blok.maxWidth" :gap="blok.gap">
    <template #item="{ item }">
      <StoryblokComponent :blok="item" />
    </template>
  </LazyAutoGrid>
</template>
<script setup>
defineProps({ blok: Object })
</script>
