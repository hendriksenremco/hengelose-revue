<template>
  <video
    ref="video"
    playsinline
    autoplay
    muted
    loop />
</template>
<script lang="ts" setup>
import Hls from 'hls.js'
const video = ref()
const props = defineProps<{
  src: string
}>()

onMounted(async () => {
  await nextTick()
  if (video.value.canPlayType('application/vnd.apple.mpegurl')) {
    video.value.src = props.src
  } else {
    const hls = new Hls()
    hls.loadSource(props.src)
    hls.attachMedia(video.value)
  }
})

onActivated(() => video.value.play())
</script>
