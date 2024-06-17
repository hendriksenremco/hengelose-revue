<template>
  <div :class="$style['gallery']">
    <div v-for="(item, index) in items" :key="item.id" :class="$style['gallery__item']" @click="event => showImage(event, index)">
      <NuxtImg format="webp" :src="item.filename" />
    </div>
  </div>
  <Transition name="gallery" :enter-active-class="$style['gallery__viewer--enter']" :leave-active-class="$style['gallery__viewer--leave']">
    <GalleryViewer v-if="activeImage" :class="$style['gallery__viewer']" :items="items" :active="activeImage" @close="activeImage = null" />
  </Transition>
</template>
<script setup lang="ts">
const activeImage: Ref<number | null> = ref(null)
defineProps<{
  items: Array<any>,
}>()

const originX: Ref<number | null> = ref(null)
const originY: Ref<number | null> = ref(null)

const showImage = (event: MouseEvent, index: number) => {
  activeImage.value = index + 1
  originX.value = event.pageX
  originY.value = event.pageY
}

const originXPx = computed(() => `${originX.value}px`)
const originYPx = computed(() => `${originY.value}px`)
</script>
<style lang="scss" module>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill,  minmax(15rem, 1fr));
  gap: var(--spacing-l);

  &__viewer{
    transition: transform var(--duration-micro-fast) var(--easing-transition);
    transform: scale(1);
    transform-origin: v-bind('originXPx') v-bind('originYPx');

    &--enter {
      transform: scale(0)
    }

    &--leave {
      transform: scale(0)
    }
  }

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
