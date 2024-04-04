<template>
  <Container no-padding full-width>
    <Hero>
      <template #background>
        <img :src="story.content.image.filename">
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
if (story.value) {
  console.log(story.value)
}
// const storyblokApi = useStoryblokApi()
// const { data } = await storyblokApi.get('cdn/stories', { version: 'draft', starts_with: 'nieuws', is_startpage: false })
</script>
