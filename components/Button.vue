<template>
  <component
    :is="to ? nuxtLink :'button'"
    :to="to"
    :class="[$style['button'],
             {[$style[`button--${color}`]]: color},
             {[$style[`button--${size}`]]: size},
             {[$style[`button--styleless`]]: styleless},
             {[$style[`button--rounded`]]: rounded},
    ]">
    <span :class="$style['button__content']">
      <span v-if="icon && iconPos ==='left'" :class="$style['button__icon']">
        <component :is="icon" />
      </span>
      <slot />

      <span v-if="icon && iconPos === 'right'" :class="$style['button__icon']">
        <component :is="icon" />
      </span>
    </span>
  </component>
</template>
<script setup>
const nuxtLink = resolveComponent('nuxt-link')
defineProps({
  to: {
    type: Object,
    default: null
  },
  color: {
    type: String,
    default: null
  },
  size: {
    type: String,
    default: null
  },
  iconPos: {
    type: String,
    default: 'left'
  },
  icon: {
    type: [Function, Object],
    default: null
  },
  styleless: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: Boolean,
    default: false
  }
})

</script>
<style  lang="scss" module>
@import url('~/css/components/_button.scss');
</style>
