<template>
  <div :class="$style['movie']">
    <iframe :class="$style['movie__frame']" :src="`//www.youtube.com/embed/${youtubeId}`" frameborder="0" allowfullscreen />
  </div>
</template>
<script setup>
const props = defineProps({ blok: Object })

const youtubeId = computed(() => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = props.blok.src.match(regExp)

  return (match && match[2].length === 11)
    ? match[2]
    : null
})
</script>
<style lang="scss" module>
.movie {
  width: 100%;

  &__frame {
    aspect-ratio: 16/9;
    width: 100%;
  }
}
</style>
