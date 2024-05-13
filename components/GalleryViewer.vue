<template>
  <div :class="$style['gallery-viewer']">
    <Button icon-only icon="X" :class="$style['gallery-viewer__close']" @click="$emit('close')" />
    <div ref="wrapper" :class="$style['gallery-viewer__items']" @click="$emit('close')">
      <div v-for="(image, index) in items" ref="itemsEl" :key="image.id" :data-index="index" :class="$style['gallery-viewer__item']">
        <NuxtImg provider="storyblok" :src="image.filename" />
      </div>
    </div>
    <div :class="$style['gallery-viewer__navigator']">
      <div v-for="(image, index) in items" :key="index" :class="[$style['gallery-viewer__navigator__item'], {[$style['gallery-viewer__navigator__item--visible']]: visibleIndex === index}]" />
    </div>
    <div
      :class="[
        $style['gallery-viewer__prev'],
        {[$style['gallery-viewer__prev--disabled']]: visibleIndex === 0}
      ]"
      @click="goPrev">
      <Button
        icon="ChevronLeft"
        icon-only
        color="opacity"
        rounded />
    </div>
    <div
      :class="[
        $style['gallery-viewer__next'],
        {[$style['gallery-viewer__next--disabled']]: visibleIndex === items.length - 1}
      ]"
      @click="goNext">
      <Button
        icon="ChevronRight"
        icon-only
        color="opacity"
        rounded />
    </div>
  </div>
</template>
<script setup lang="ts">
defineEmits(['close'])
const wrapper = ref(null)
const itemsEl = ref(null)
const visibleIndex = ref(0)
const intersectionObserver = ref(null)
const props = defineProps<{
  items: Array<any>
  active: number | null
}>()

const goPrev = () => {
  itemsEl.value[visibleIndex.value - 1].scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
}
const goNext = () => {
  itemsEl.value[visibleIndex.value + 1].scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
}

onMounted(() => {
  if (props.active && itemsEl.value) {
    itemsEl.value[props.active - 1].scrollIntoView() // Gallery sends index + 1 to prevent null-errors
  }

  intersectionObserver.value = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log(entry)
        visibleIndex.value = parseInt(entry.target.dataset.index)
      }
    })
  }, { rootMargin: '10px', threshold: 0.5 })
  itemsEl.value.forEach(item => {
    intersectionObserver.value.observe(item)
  })
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

    &::-webkit-scrollbar {
      display: none;
    }
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

  &__navigator {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: var(--spacing);
    position: fixed;
    bottom : var(--spacing);
    width: 100cqw;
    height: 4rem;

    &__item {
      background-color: var(--text-base);
      border-radius: 100%;
      width: .5rem;
      height: .5rem;
      opacity: 0.5;
      transition: all var(--duration-micro-normal) var(--easing-transition);

      &--visible {
        background: var(--text-base);
        opacity: 1;
      }
    }
  }

  &__prev,
  &__next {
    display: flex;
    align-items: center;
    padding: 0 var(--spacing-xl);
    position: fixed;
    top: var(--topbar-height);
    bottom: 0;
    z-index: 100;
    transition: opacity var(--duration-micro-normal) var(--easing-transition);

    &--disabled {
      opacity: 0.25;
    }
  }

  &__prev {
    left:0;
  }

  &__next {
    right: 0;
  }

}
</style>
