<template>
  <div :class="$style['grid']">
    <div v-for="(item, n) in items" :key="n" :class="$style['grid__item']">
      <slot name="item" :item="item" />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  items: {
    type: [Array, Object],
    default: null
  },
  maxWidth: {
    type: [null, String, Number],
    default: null
  }
})

const width = computed(() => `${props.maxWidth || 180}px`)
</script>
<style lang="scss" module>
.grid {
  display: grid;
  align-items: stretch;
  justify-items: space-between;
  grid-template-columns: repeat(auto-fill, minmax(v-bind('width'), 1fr));
  gap: var(--spacing-xl);

  &__item {
    background-color: var(--secondary-surface);
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    object-fit: contain;
    padding: var(--spacing-xl);
  }
}
</style>
