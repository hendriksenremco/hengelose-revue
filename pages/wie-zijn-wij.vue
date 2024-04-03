<template>
  <Container no-padding>
    <Hero height-auto no-overlay>
      <template #background>
        <iframe
          :class="$style['video']"
          src="https://www.youtube.com/embed/Dw5sInFIi0k?autoplay=1&muted=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen />
      </template>
    </Hero>
  </Container>
  <Container>
    <h1>Wie zijn wij</h1>
    <img src="~/assets/sbb-logo.png">

    Erkend leer bedrijf
  </Container>
</template>
<style lang="scss" module>
.video {

  width: 100%;
}
</style>
