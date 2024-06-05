<template>
  <Transition name="drawer" appear>
    <slot />
  </Transition>
</template>
<style lang="scss">
  .drawer-enter-active {
    transition: transform var(--duration-micro-normal) var(--easing-transition);
  }

  .drawer-leave-active {
    transition: transform var(--duration-micro-normal) var(--easing-transition);
  }

  .drawer-enter-from,
  .drawer-leave-to {
    transform: translateX(105%);
  }

  .drawer-leave-from,
  .drawer-enter-to {
    transform: translateX(0);
  }
</style>
