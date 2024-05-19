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
  },
  gap: {
    type: [String, Number],
    default: 16
  }
})

const width = computed(() => `${props.maxWidth || 180}px`)
const gridGap = computed(() => `${props.gap}px`)
</script>
<style lang="scss" module>
.grid {
  display: grid;
  align-items: start;
  justify-items: space-between;
  grid-template-columns: repeat(auto-fill,  minmax(v-bind('width'), 1fr));
  gap: v-bind('gridGap');
  width: 100%;
  container: grid / inline-size;

  &__item {
    height: 100%;
    align-items: start;
    justify-content: center;
    max-width: 100cqw;
    display: flex;
  }
}
</style>
