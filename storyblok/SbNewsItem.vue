<template>
  <Container no-padding full-width>
    <Hero>
      <template #background>
        <NuxtImg v-if="blok.image?.filename" :src="blok.image.filename" />
      </template>
      <h1>{{ blok.title }}</h1>
      <p>{{ blok.teaser }}</p>
    </Hero>
  </Container>
  <Container>
    <article v-html="resolvedRichText" />
  </Container>
</template>
<script setup>
const props = defineProps({ blok: Object })
const resolvedRichText = computed(() => renderRichText(props.blok.text))
</script>
