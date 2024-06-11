<template>
  <Container no-padding full-width>
    <Hero>
      <template #background>
        <NuxtImg v-if="blok.image?.filename" :src="blok.image.filename" format="webp" />
      </template>
      <h1>{{ blok.title }}</h1>
      <p>{{ blok.teaser }}</p>
    </Hero>
  </Container>
  <Container>
    <Button :to="{name: 'nieuws'}" icon="ArrowLeft" icon-pos="left" class="h-margin-bottom-xl">
      Nieuws
    </Button>
    <article v-html="resolvedRichText" />
  </Container>
</template>
<script setup>
const { formatNewsItem } = useHrMeta()
const props = defineProps({ blok: Object })
const resolvedRichText = computed(() => renderRichText(props.blok.text))
formatNewsItem(props.blok.title, props.blok.teaser, props.blok)
</script>
