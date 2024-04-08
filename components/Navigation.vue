<template>
  <NavItem :to="{path: '/'+ page.full_slug}" v-for="page in story.content.pages">
    {{ page.name }}
  </NavItem>
</template>
<script setup>
const story = await useAsyncStoryblok('global/navigation', {resolve_relations: 'Navigation.pages', resolve_links: 'story'})

</script>
