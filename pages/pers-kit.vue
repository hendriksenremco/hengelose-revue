<template>
  <Container>
    <h1>Hengelose Revue merk handboek</h1>
    <h2 class="h-margin-bottom h-margin-top-xxxl">
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
        </template>
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
      <Card image="/brand/fonts/hr-light.png" contain background="light">
        Een alternatief voor HR Black. Gebruik dit lettertype als HR Black te dik is of niet geschikt blijkt.
        <template #actions>
          <Button icon="Download" download target="_blank" to="/brand/fonts/hr-light.woff2" class="h-margin-right">
            HR Light
          </Button>
        </template>
      </Card>
      <Card image="/brand/fonts/inter-font.png" contain background="light">
        Het lettertype voor grote blokken tekst. Gebruik een regelafstand van minimaal 133%.
        <template #actions>
          <Button icon="ExternalLink" target="_blank" to="https://rsms.me/inter/">
            Inter
          </Button>
        </template>
      </Card>
    </div>

    <h2 class="h-margin-bottom h-margin-top-xl">
      Kleuren
    </h2>
    <div :class="$style['grid']">
      <Card v-for="color in colors" :key="color.title">
        <h4 class="h-margin-bottom">
          {{ color.title }}
        </h4>
        {{ color.hex.join(', ') }}<br>
        {{ color.extra }}
        <template #image>
          <div :style="color.style" />
        </template>
      </Card>
    </div>
  </Container>
</template>
<script setup>
useHead({
  title: 'Pers kit'
})

const colors = reactive([
  {
    title: 'HR Curtain Red',
    hex: ['#A60000'],
    style: { 'background-color': '#A60000' }
  },
  {
    title: 'HR Showbiz Gold',
    hex: ['#F7A830'],
    style: { 'background-color': '#F7A830' }
  },
  {
    title: 'HR Gradient',
    hex: ['#A60000', '#F7A830'],
    style: { background: 'linear-gradient(45deg,#A60000,#F7A830)' },
    extra: 'linear-gradient(45deg, #A60000, #F7A830)'
  },
  {
    title: 'HR Black',
    hex: ['#0d0d0d'],
    style: { 'background-color': '#0d0d0d' }
  },
  {
    title: 'HR White',
    hex: ['#ffffff'],
    style: { 'background-color': '#ffffff' }
  }
])
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-xxl);
  place-items: start space-between;

  & > * {
    height: 100%;
  }
}
</style>
