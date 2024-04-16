<template>
  <div :class="$style['nav-item']">
    <Button
      styleless
      :color="isActive ? 'cta': 'transparent'"
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
        {[$style['nav-item__submenu--show']]: showSub}
      ]">
      <slot name="subitems" />
    </div>
  </div>
</template>
<script setup>
const slots = useSlots()
const props = defineProps({
  to: {
    type: Object,
    default: null
  }
})
const showSub = ref(false)
const route = useRoute()
const isActive = computed(() => route.path === props.to.path || route.name === props.to.name)

const onClick = event => {
  if (slots.subitems) {
    event.preventDefault()
    showSub.value = !showSub.value
    return false
  }
}

onMounted(() => {
  if (route.fullPath.includes(props.to.path)) {
    showSub.value = true
  }
})

watch(() => route.fullPath, () => {
  showSub.value = false
  if (route.fullPath.includes(props.to.path)) {
    showSub.value = true
  }
})
</script>
<style lang="scss" module>
.nav-item {

    font-family: var(--font-family-slab);
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
      background-color: var(--background-raised);
      box-shadow: var(--box-shadow-elevation-3);
      display: flex;
      flex-direction: column;
      position: absolute;
      opacity: 0;
      right: 0;

      @container (width < 70rem) {
        box-shadow: none;
        opacity: 0;
        height: 0;
        position: static;
        width: 100%;
        padding-left: var(--spacing-xl);
      }

      &--show {
        opacity: 1;

        @container (width < 70rem) {
          height: auto;
        }
      }
    }
}
</style>
