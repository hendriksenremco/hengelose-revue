<template>
  <div :class="$style['gallery']">
    <div v-for="(item, index) in items" :key="item.id" :class="$style['gallery__item']" @click="showImage = parseInt(index) + 1">
      <NuxtImg format="webp" :src="item.filename" />
    </div>
  </div>
  <GalleryViewer v-if="showImage" :items="items" :active="showImage" @close="showImage = null" />
</template>
<script setup lang="ts">
const showImage = ref()
defineProps<{
  items: Array<any>,
}>()
</script>
<style lang="scss" module>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill,  minmax(15rem, 1fr));
  gap: var(--spacing-l);

  &__item {
    aspect-ratio: 1/1;
    cursor: pointer;
    display: flex;
    border: 2px solid var(--border-subtle);
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 100%;
        background-color: var(--opacity-surface);
        z-index: 0;
        width: 100%;
        height: 100%;
        transition: transform var(--duration-micro-fast) var(--easing-transition);
        will-change: transform;
    }

    &:hover {
        &::before {
          transform: translateY(-100%) translateZ(0);
        }
    }

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
}
</style>
