<template>
  <Drawer :show="sidebarShouldShow" @close="hideSidebar">
    <Navigation />
    <template #bottom>
      <Socials />
    </template>
  </Drawer>
  <TopBar>
    <Navigation />
    <template #mobile>
      <Button icon="Menu" icon-pos="right" color="transparent" @click="showSidebar">
        Menu
      </Button>
    </template>
    <template #aside>
      <Socials />
    </template>
  </TopBar>
  <main :class="$style['layout__main']">
    <slot />
  </main>
  <Footer />
</template>
<script setup>
import { Menu } from 'lucide-vue-next'
const { sidebarShouldShow, showSidebar, hideSidebar } = useLayout()

useHead({
  titleTemplate: titleChunk => titleChunk ? `${titleChunk} - Hengelose Revue` : 'Hengelose Revue - Theater en meer...',
  meta: [
    {
      key: 'description',
      name: 'description',
      content: 'Twentse humor met een hoog entertainment gehalte'
    },
    {
      name: 'robots',
      content: 'noindex'
    }
  ]
})
</script>
<style lang="scss" module>
.layout {
  &__main {
    min-height: calc(100vh - var(--topbar-height) + var(--spacing));
  }
}
</style>
