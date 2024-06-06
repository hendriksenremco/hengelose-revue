<template>
  <StoryblokComponent v-if="data?.story" :blok="data?.story.content" />
</template>
<script setup>
const route = useRoute()
const { slug } = route.params
const url = slug && slug.length > 0 ? slug.join('/') : 'home'
const data = ref(null)

try {
  data.value = await useHrStoryblok('cdn/stories/' + url.replace(/\/$/, ''))
} catch (e) {
  if (e.status === 404) {
    navigateTo({ path: '/' }, { redirectCode: 301 })
  }
}
</script>
