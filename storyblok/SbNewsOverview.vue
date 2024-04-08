<template>
  <Container>
    <!-- <div v-for="story in data.stories" :key="story._uid">
      <Card :image="blok.image.filename ">
        <h4>{{ blok.title }}</h4>
        <small>{{ blok.teaser }}</small>
        <template #actions>

          <Button :to="{path: '/' + blok.full_slug}" icon="MoveRight" icon-pos="right" color="transparent">
            Lees meer
          </Button>
        </template>
      </Card>
    </div> -->
    {{ blok }}
  </Container>
</template>
<script setup>
const props = defineProps({ blok: Object })

</script>
