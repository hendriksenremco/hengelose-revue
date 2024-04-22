<template>
  <button
    :class="[
      $style['button'],
      {[$style[`button--with-border`]]: withBorder},
      {[$style[`button--rounded`]]: rounded},
      {[$style[`button--${color}`]]: color}
    ]">
    <span :class="$style['button__content']">
      <span :class="$style['button__icon']">
        <Icon :name="icon" />
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
    type: String,
    default: null
  },
  withBorder: {
    type: Boolean,
    default: null
  },
  rounded: {
    type: Boolean,
    default: false
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
