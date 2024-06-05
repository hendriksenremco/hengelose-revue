<template>
  <Container no-padding full-width>
    <Hero>
      <template #background>
        <NuxtImg v-if="story.content.image.filename" format="webp" :src="story.content.image.filename" />
      </template>
      <h1>{{ story.content.title }}</h1>
      <p>{{ story.content.teaser }}</p>
    </Hero>
  </Container>
  <Container>
    <article v-html="resolvedRichText" />
  </Container>
</template>
<script setup>
const route = useRoute()
const story = await useAsyncStoryblok(route.fullPath, { version: 'draft' })
const resolvedRichText = computed(() => renderRichText(story.value.content.text))
</script>
