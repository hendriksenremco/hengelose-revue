<template>
  <Container>
    <FormInput v-model="name" type="text" label="Naam" />
    <FormInput v-model="email" type="email" label="Email" />
    <FormInput v-model="phone" type="phone" label="Telefoonummer" />
    <FormTextarea v-model="message" type="phone" label="Bericht" />
    {{ name }}
    {{ email }}
    {{ phone }}
    {{ message }}
  </Container>
</template>
<script setup lang="ts">
const name = ref(null)
const email = ref(null)
const phone = ref(null)
const message = ref(null)
</script>
