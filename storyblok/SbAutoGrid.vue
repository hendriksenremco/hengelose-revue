<template>
  <AutoGrid v-editable="blok" :items="blok.blocks" :max-width="blok.maxWidth" :gap="blok.gap">
    <template #item="{ item }">
      <StoryblokComponent :blok="item" />
    </template>
  </AutoGrid>
</template>
<script setup>
defineProps({ blok: Object })
</script>
