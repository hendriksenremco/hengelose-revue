<template>
  <Container>
    <h2 class="h-margin-bottom">
      Logo's
    </h2>
    <div :class="$style['grid']">
      <Card v-for="logo in logos" :key="logo.filename" :background="logo.background" contain :image="`/brand/logo/${logo.filename}.png`">
        {{ logo.description }}
        <template #actions>
          <Button color="opacity" :to="`/brand/logo/${logo.filename}.svg`" download target="_blank" icon="Download">
            Svg
          </Button>
          <Button color="opacity" :to="`/brand/logo/${logo.filename}.png`" download target="_blank" icon="Download">
            Png
          </Button>
        </template>
      </Card>
    </div>
    <h2 class="h-margin-bottom h-margin-top-xl">
      Iconen
    </h2>
    <div :class="$style['grid']">
      <Card v-for="icon in icons" :key="icon.filename" :background="icon.background" contain :image="`/brand/icon/${icon.filename}.png`">
        {{ icon.description }}
        <template #actions>
          <Button color="opacity" :to="`/brand/icon/${icon.filename}.svg`" download target="_blank" icon="Download">
            Svg
          </Button>
          <Button color="opacity" :to="`/brand/icon/${icon.filename}.png`" download target="_blank" icon="Download">
            Png
          </Button>
        </template>r
      </Card>
    </div>

    <h2 class="h-margin-bottom h-margin-top-xl">
      Typografie
    </h2>
    <div :class="$style['grid']">
      <Card image="/brand/fonts/hr-black.png" contain background="light">
        Gebruik dit lettertype voor uitingen met korte zinnen of als koptekst.
        Zorg dat de zinnen niet meer dan twee regels bevat.
        <template #actions>
          <Button icon="Download" download target="_blank" to="/brand/fonts/hr-black.woff2" class="h-margin-right">
            HR Black
          </Button>
        </template>
      </Card>
      <Card image="/brand/fonts/hr-book.png" contain background="light">
        Een alternatief voor HR Black. Gebruik dit lettertype als HR Black te dik is of niet geschikt blijkt.
        <template #actions>
          <Button icon="Download" download target="_blank" to="/brand/fonts/hr-book.woff2" class="h-margin-right">
            HR Book
          </Button>
        </template>
      </Card>
      <Card image="/brand/fonts/inter-font.png" contain background="light">
        Het lettertype voor grote blokken tekst. Gebruik een regelafstand van minimaal 133%.
        <template #actions>
          <Button icon="Download" target="_blank" to="https://rsms.me/inter/">
            Inter
          </Button>
        </template>
      </Card>
    </div>
  </Container>
</template>
<script setup>
const logos = reactive([
  {
    filename: 'logo-fc',
    title: 'Logo kleur',
    background: 'light',
    description: 'Gebruik dit logo tegen een lichte achtergrond'
  },
  {
    filename: 'logo-fc-dia',
    title: 'Logo kleur dia',
    background: 'dark',
    description: 'Gebruik dit logo tegen een donkere achtergrond'
  },
  {
    filename: 'logo-bw',
    title: 'Zwart wit',
    background: 'light',
    description: 'Gebruik dit logo tegen een lichte achtergrond en als er geen kleur gebruikt kan worden'
  },
  {
    filename: 'logo-bw-dia',
    title: 'Zwart wit dia',
    background: 'dark',
    description: 'Gebruik dit logo tegen een donkere achtergrond en als er geen kleur gebruikt kan worden'
  }
])
const icons = reactive([
  {
    filename: 'icon-fc',
    title: 'Icoon kleur',
    background: 'light',
    description: 'Gebruik dit icoon als er niet genoeg ruimte is voor het volledige logo '
  },
  {
    filename: 'icon-bw',
    title: 'Icoon zwart wit',
    background: 'light',
    description: 'Gebruik dit icoon als er niet genoeg ruimte is voor het volledige logo, er geen kleur gebruikt kan worden. Alleen gebruiken op een lichte achtegrond'
  },
  {
    filename: 'icon-bw-dia',
    title: 'Icoon zwart wit dia',
    background: 'dark',
    description: 'Gebruik dit icoon als er niet genoeg ruimte is voor het volledige logo, er geen kleur gebruikt kan worden. Alleen gebruiken op een donkere achtegrond'
  }
])

</script>
<style lang="scss" module>
.grid {
  align-items: stretch;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-l);
  align-items: start;
  justify-items: space-between;

  & > * {
    height: 100%;
  }
}
</style>
