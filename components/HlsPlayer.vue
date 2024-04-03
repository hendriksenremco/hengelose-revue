<template>
  <video ref="video" autoplay muted loop />
</template>
<script lang="ts" setup>
import Hls from 'hls.js'
const video = ref()
const props = defineProps<{
  src: string
}>()

onMounted(() => {
  if (video.value.canPlayType('application/vnd.apple.mpegurl')) {
    video.value.src = props.src
  } else {
    const hls = new Hls()
    hls.loadSource(props.src)
    hls.attachMedia(video.value)
  }
})
</script>
