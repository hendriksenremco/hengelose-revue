<template>
  <NuxtLink
    v-if="!!blok.url?.cached_url"
    :to="blok.url.cached_url"
    :class="$style['link-image']"
    :target="blok.url.target">
    <NuxtImg
      format="webp"
      quality="80"
      :src="blok.image?.filename" />
  </NuxtLink>
  <NuxtImg v-else format="webp" :src="blok.image?.filename" quality="80" />
</template>
<script setup>
defineProps({ blok: Object })
</script>
<style lang="scss" module>
.link-image {

  display: inline-flex;
  width: 100%;
  height: 100%;

  & > * {
    object-fit: cover;
    object-position: 50% 25%;
    width: 100%;
  }
}
</style>
