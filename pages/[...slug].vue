<template>
  <StoryblokComponent v-if="data?.story" :blok="data?.story.content" />
</template>
<script setup>
const { slug } = useRoute().params
const url = slug && slug.length > 0 ? slug.join('/') : 'home'
const data = await useHrStoryblok('cdn/stories/' + url.replace(/\/$/, ''))

</script>
