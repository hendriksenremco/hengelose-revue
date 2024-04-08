<template>
  <Button 
    :color="blok.color" 
    :size="blok.size" 
    :with-border="blok.withBorder" 
    :transparent="blok.transparent" 
    :rounded="blok.rounded"
    :icon="blok.icon"
    :to="blok.to.url"
    :icon-pos="blok.iconPos">
    {{ blok.label }}
  </Button>
</template>
<script setup>
defineProps({ blok: Object })
</script>