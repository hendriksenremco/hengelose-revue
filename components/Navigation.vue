<template>
  <NavItem
    v-for="item in story.content.items"
    :key="item.parent.full_slug"
    :to="{path: '/'+ item.parent.full_slug}">
    {{ item.parent.name }}

    <template v-if="item.items.length" #subitems>
      <NavItem
        v-for="subItem in item.items"
        :key="subItem.full_slug"
        :to="{path: '/'+ subItem.full_slug}">
        {{ subItem.name }}
      </NavItem>
    </template>
  </NavItem>
</template>
<script setup>
const { story } = await useHrStoryblok('cdn/stories/global/navigation', { resolve_relations: 'NavigationItem.items,NavigationItem.parent', resolve_links: 'story', version: 'draft' })

</script>
