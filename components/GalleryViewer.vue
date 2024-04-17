<template>
  <div :class="$style['gallery-viewer']">
    <IconButton icon="X" :class="$style['gallery-viewer__close']" @click="$emit('close')" />
    <div :class="$style['gallery-viewer__items']" @click="$emit('close')">
      <div v-for="image in items" ref="itemsEl" :key="image.id" :class="$style['gallery-viewer__item']">
        <NuxtImg provider="storyblok" :src="image.filename" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineEmits(['close'])
const itemsEl = ref(null)
const props = defineProps<{
  items: Array<any>
  active: number | null
}>()

onMounted(() => {
  if (props.active && itemsEl.value) {
    itemsEl.value[props.active - 1].scrollIntoView() // Gallery sends index + 1 to prevent null-errors
  }
  console.log(itemsEl)
})
</script>
<style lang="scss" module>
.gallery-viewer {
  background-color: var(--curtain);
  backdrop-filter: blur(4px);
  position: fixed;
  inset: 0;
  z-index: 1000;
  container: galleryViewer / inline-size;

  &__items {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: auto;
    height: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100cqh;
    width: 100cqw;
    scroll-snap-align: center;

    img {
      object-fit: contain;
      width: 100cqw;
      height: 100cqh;
    }
  }

  &__close {
    position: fixed;
    top: var(--spacing);
    right: var(--spacing);
  }
}
</style>
