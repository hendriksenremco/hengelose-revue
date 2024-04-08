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
        <NuxtLink :to="{name: 'nieuws'}">
          Nieuws van de Hengelose Revue
        </NuxtLink>
      </h2>

      <div :class="$style['news__grid']">
        <Card v-for="story in data.stories" :key="story._uid" :image="story.content.image.filename ">
          <h4>{{ story.content.title }}</h4>
          <small>{{ story.content.teaser }}</small>
          <template #actions>
            <Button :to="{name: 'nieuws-slug', params: {slug: story.slug}}" :icon="MoveRight" icon-pos="right" color="transparent">
              Lees meer
            </Button>
          </template>
        </Card>
      </div>
    </Container>
    <Container :class="$style['sponsors']">
      <h2 :class="$style['sponsors__title']">
        Vrienden van de Hengelose Revue
      </h2>
      <HomeSponsors />
    </Container>
  </Box>
</template>
<script setup>
import { MoveRight, Phone } from 'lucide-vue-next'
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories', { version: 'draft', starts_with: 'nieuws', is_startpage: false })
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
    color: var(--text-base);
    margin-bottom: var(--spacing-xl);

    a {
      color: var(--text-base);
    }
  }
}

.news {
  margin-top: 0;

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: var(--spacing-l);
    width: 100%;
  }
}
</style>
