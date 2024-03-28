<template>
  <Button styleless :color="isActive ? 'cta': 'transparent'" :class="$style['nav-item']" :to="to">
    <slot />
  </Button>
</template>
<script setup>
const props = defineProps({
  to: {
    type: Object,
    default: null
  }
})
const route = useRoute()
const isActive = computed(() => route.path === props.to.path || route.name === props.to.name)

</script>
<style lang="scss" module>
.nav-item {
    padding: var(--spacing-l);
}
</style>
