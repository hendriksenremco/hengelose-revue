<template>
  <Container :class="$style['error']" no-padding-top>
    <Logo />
    <h1>Oeps</h1>
    <div>Er ging iets fout</div>
    <Button transparent with-border class="h-margin-top-xl" icon="ArrowRight" icon-pos="right">
      Breng me naar de homepage
    </Button>
  </Container>
</template>
<style lang="scss" module>
.error {
  display: flex;
  height: 100dvh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
