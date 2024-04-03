<template>
  <Container no-padding full-width>
    <Hero>
      <template #background>
        <!-- <iframe
          src="https://player.vimeo.com/video/930273080?h=2bf59c32b3&background=1"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen /> -->
        <HlsPlayer src="/home/playlist.m3u8" />
      </template>
      <h2 :class="$style['title']">
        Twentse humor met een<br> hoog entertainment gehalte
      </h2>

      <template #actions>
        <Button :to="{name: 'kaartverkoop'}" :icon="MoveRight" icon-pos="right" color="cta">
          Kaarten kopen
        </Button>
        <Button :icon="Phone" with-border transparent icon-pos="right">
          Contact
        </Button>
      </template>
    </Hero>
  </Container>
  <Box>
    <Container :class="$style['scroller']" no-padding-top>
      <HomeScroller /><br>
      <Button icon-pos="right" :icon="MoveRight" with-border color="transparent">
        Kom bij de revue
      </Button>
    </Container>
    <Container :class="$style['news']">
      <h2 :class="$style['news__title']">
        Nieuws van de Hengelose Revue
      </h2>
      <Card image="/bertus.jpg">
        <h4>Bertus Braam ontvangt Rinus Paskamp award</h4>
        <template #actions>
          <Button :to="{name: 'nieuws-slug', params: {slug:'1'}}" :icon="MoveRight" icon-pos="right" color="transparent">
            Lees meer
          </Button>
        </template>
      </Card>
    </Container>
    <Container :class="$style['sponsors']">
      <h2 :class="$style['sponsors__title']">
        Vrienden van de Hengelose Revue
      </h2>
      <HomeSponsors />
    </Container>
    <!-- <Container>
      <h2>Laatste nieuws</h2>
    </Container>
    <Container>
      <h2>Verhuur</h2>
    </Container> -->
  </Box>
</template>
<script setup>
import { MoveRight, Phone } from 'lucide-vue-next'
</script>
<style lang="scss" module>
.title {
  font-size: 36px;

  @media(width < 50rem) {
    font-size: 24px;
  }
}

.scroller {
  padding-top: 3rem;
}

.news,
.sponsors {
  &__title {

    margin-bottom: var(--spacing-xl);
  }
}

.news {
  margin-top: 0;
}
</style>
