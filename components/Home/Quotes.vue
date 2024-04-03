<template>
  <h2>
    In de media
  </h2>
  <div :class="$style['quotes']">
    <div :class="$style['quotes__container']">
      <Quote image="https://i.pravatar.cc/400">
        Wat een geweldige show
      </Quote>
      <Quote image="https://i.pravatar.cc/400">
        Alleen maar gelachen
      </Quote>
      <Quote image="https://i.pravatar.cc/400">
        Ik kom volgend jaar weer
      </Quote>
      <Quote image="https://i.pravatar.cc/400">
        Ik kom volgend jaar weer
      </Quote>
    </div>
  </div>
</template>
<style lang="scss" module>
.quotes {
  display: flex;
  gap: var(--spacing);
  flex-flow: row nowrap;
  container: quotes / inline-size;
  overflow-x: auto;
  width: 100%;
  scroll-snap-type: x mandatory;
  scroll-snap-align: start;
  margin-top: var(--spacing-xl);

  &::-webkit-scrollbar {
      display: none; /* for Chrome, Safari, and Opera */
    }

  &__container {
    display: flex;
    flex-direction: row;
    gap: var(--spacing);

    & > * {
      scroll-snap-align: start;
      width: 66vw;
      max-width: 500px;
    }
  }
}</style>
