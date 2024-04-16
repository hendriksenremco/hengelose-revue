<template>
  <Person v-editable="blok" :name="blok.name" :image="blok.image?.filename" :subtitle="blok.subtitle">
    {{ blok.text }}
  </Person>
</template>
<script setup>
defineProps({ blok: Object })
</script>
