<template>
  <form :class="$style['form']" @submit.prevent="onSubmit">
    <h2>{{ title }}</h2>
    <FormInput v-model="name" label="Naam" />
    <FormInput v-model="email" label="Emailadres" />
    <FormInput v-model="phone" label="Telefoonnummer" />
    <FormTextarea v-model="message" rows="10" label="Je bericht" />
    <Button color="cta" :class="$style['form__submit']" icon="ArrowRight" icon-pos="right" type="submit">
      Verstuur
    </Button>
  </form>
</template>
<script setup lang="ts">
defineProps<{
  title: String
}>()

const name: Ref<string | null> = ref('')
const email: Ref<string| null> = ref('')
const phone: Ref<string| null> = ref('')
const message: Ref<string| null> = ref('')

const onSubmit = async () => {
  const { data } = await useFetch('https://submitform-dar6adajaq-ey.a.run.app', {
    method: 'POST',
    body: {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
      type: 'contact-form'
    }
  })

  if (data.value) {
    name.value = null
    email.value = null
    phone.value = null
    message.value = null
  }
}
</script>
<style lang="scss" module>
.form {
  background-color: var(--secondary-surface);
  color: var(--secondary-on-surface);
  box-shadow: var(--box-shadow-elevation-1);
  display: inline-flex;
  align-items: stretch;
  flex-direction: column;
  gap: var(--spacing-l);
  padding: var(--spacing-xl);
  width: 100%;

  &__submit {
    width: auto;
    margin-left: auto;
  }
}
</style>
