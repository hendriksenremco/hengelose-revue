<template>
  <div :class="$style['nav-item']">
    <Button
      styleless
      :color="isActive ? 'opacity': isChildActive ? 'opacity': 'transparent'"
      :class="$style['nav-item']"
      :icon="!!$slots.subitems ? 'ChevronDown' : null"
      icon-pos="right"
      :to="!$slots.subitems ? to : null"
      @click.stop.prevent="onClick">
      <slot />
    </Button>
    <div
      :class="[
        $style['nav-item__submenu'],
        {[$style['nav-item__submenu--show']]: showSub || (isChildActive && isMobile)}
      ]">
      <slot name="subitems" />
    </div>
  </div>
</template>
<script setup>
import { AppWindowMac } from 'lucide-vue-next'

const slots = useSlots()
const props = defineProps({
  to: {
    type: Object,
    default: null
  },
  isActive: {
    type: Boolean,
    default: false
  },
  isChildActive: {
    type: Boolean,
    default: false
  }
})
const showSub = ref(false)
const route = useRoute()
const isMobile = ref(false)

const onClick = event => {
  if (slots.subitems) {
    event.preventDefault()
    showSub.value = !showSub.value
    return false
  }
}

onMounted(() => {
  const observer = new ResizeObserver(() => {
    isMobile.value = window.matchMedia('(max-width: 70rem)').matches
  })
  observer.observe(document.body)
})

watch(() => route.fullPath, () => {
  showSub.value = false
  // @TODO check for mobile here
  // if (route.fullPath.includes(props.to.path)) {
  //   showSub.value = true
  // }
})
</script>
<style lang="scss" module>
.nav-item {

    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
    position: relative;

    & > a,
    & > button {
      max-width: 300px;
      width: 100%;

      @container (width < 70rem) {
        max-width: 100%;
        width: 100%;
      }
    }

    &__submenu {
      background-color: hsla(var(--secondary-hue),var(--secondary-saturation), 30%, 95%);
      box-shadow: var(--box-shadow-elevation-4);
      display: flex;
      flex-direction: column;
      position: absolute;
      opacity: 0;
      pointer-events: none;
      right: 0;

      @container (width < 70rem) {
        background-color: unset;
        box-shadow: none;
        opacity: 0;
        height: 0;
        position: static;
        width: 100%;
        padding-left: var(--spacing-xl);
      }

      &--show {
        opacity: 1;
        pointer-events: all;

        @container (width < 70rem) {
          height: auto;
        }
      }
    }

    &:focus,
    &:focus-within {
      .nav-item__submenu {
        opacity: 1;
        height: auto;
      }
    }
}
</style>
