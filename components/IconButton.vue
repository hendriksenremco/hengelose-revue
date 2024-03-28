<template>
  <button :class="[$style['button'], {[$style[`button--${color}`]]: color}]">
    <span :class="$style['button__content']">
      <span :class="$style['button__icon']">
        <component :is="icon" />
        <slot />
      </span>
    </span>
  </button>
</template>
<script setup>
defineProps({
  color: {
    type: String,
    default: null
  },
  icon: {
    type: [Function, Object],
    default: null
  }
})
</script>
<style module>
@import url('~/css/components/_button.scss');

.button__content {
    align-items: center;
    justify-content: center;
    aspect-ratio: 1/1;
    display: flex;
}
.button__icon {
    margin: 0;
}
</style>
