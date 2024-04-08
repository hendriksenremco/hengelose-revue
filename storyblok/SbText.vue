<template>
  <div v-editable="blok" v-html="articleContent" />
</template>
<script setup>

const props = defineProps({ blok: Object })
const articleContent = computed(() => renderRichText(props.blok.text))
</script>
