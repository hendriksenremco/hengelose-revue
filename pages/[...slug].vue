<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
<script setup>
const { slug } = useRoute().params
const url = slug && slug.length > 0 ? slug.join('/') : 'home'
const { story }  = await useHrStoryblok('cdn/stories/' + url.replace(/\/$/, ''))
</script>