<template>
  <Button
    v-editable="blok"
    :color="blok.color"
    :size="blok.size"
    :with-border="blok.withBorder"
    :transparent="blok.transparent"
    :rounded="blok.rounded"
    :icon="blok.icon"
    :to="blok.to.cached_url"
    :target="blok.to.linktype === 'url' ? '_blank' : ''"
    :icon-pos="blok.iconPos">
    {{ blok.label }}
  </Button>
</template>
<script setup>
defineProps({ blok: Object })
</script>
