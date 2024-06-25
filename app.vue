<template>
  <NuxtLayout>
    <NuxtPwaAssets />
    <VitePwaManifest />
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
const { load } = useNavigation()
await load()
</script>
<style module lang="scss">
@import "~/css/main.css";
@import '~/css/_helpers';
</style>
