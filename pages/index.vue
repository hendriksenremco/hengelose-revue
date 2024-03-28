<template>
  <Container no-padding full-width>
    <div :class="$style['page']">
      <!-- <div :class="$style['page__video-wrapper']">
      <iframe
        :class="$style['page__video']"
        frameborder="0"
        src="https://www.youtube.com/embed/vH7CadUZYRc?mute=1&modestbranding=0&autoplay=1&autohide=1&rel=0&showinfo=0&controls=0&disablekb=1&enablejsapi=1&iv_load_policy=3&loop=1&playsinline=1&fs=0" />
      <div :class="$style['page__video__overlay']" />
    </div> -->
      <div :class="$style['page__buttons']">
        <Button rounded :icon="MoveRight" icon-pos="right" color="cta">
          Kaarten kopen
        </Button>
        <Button rounded :icon="Phone" icon-pos="right">
          Contact
        </Button>
      </div>
    </div>
  </Container>
</template>
<script setup>
import { MoveRight, Phone } from 'lucide-vue-next'
</script>
<style lang="scss" module>
.page {
    // background-image: url('~/assets/home-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-xxxl);
    position: relative;

    &__buttons {
        display: flex;
        gap: var(--spacing-xl);
    }
}
</style>
