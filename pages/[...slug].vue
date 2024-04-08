<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
<script setup>
const { $preview } = useNuxtApp()
const version = $preview ? 'draft' : 'published'
const { slug } = useRoute().params
const url = slug && slug.length > 0 ? slug.join('/') : 'home'
const story = await useAsyncStoryblok(url.replace(/\/$/, ''), { version });

</script>