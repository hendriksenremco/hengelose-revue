<template>
  <DrawerTransition>
    <LazyDrawer v-if="sidebarShouldShow" @close="hideSidebar">
      <Navigation />
      <template #bottom>
        <Socials />
      </template>
    </LazyDrawer>
  </DrawerTransition>
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
const { sidebarShouldShow, showSidebar, hideSidebar } = useLayout()

useHead({
  titleTemplate: titleChunk => titleChunk ? `${titleChunk} - Hengelose Revue` : 'Hengelose Revue - Theater en meer...',
  meta: [
    {
      key: 'description',
      name: 'description',
      content: 'Theater en meer...'
    },
    {
      rel: 'preconnect',
      href: 'https://rsms.me',
      crossorigin: 'anonymous'
    },
    {
      rel: 'preconnect',
      href: 'https://www.googletagmanager.com',
      crossorigin: 'anonymous'
    }
  ],
  htmlAttrs: {
    lang: 'nl'
  }
})
</script>
<style lang="scss" module>
.layout {
  &__main {
    min-height: calc(100vh - var(--topbar-height) + var(--spacing));
  }
}
</style>
