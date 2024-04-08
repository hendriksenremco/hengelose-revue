export default defineNuxtPlugin((nuxtApp) => {
  const route = useRoute();
  const preview = route.query?._storyblok || false;
  
  return { provide: { preview } };
});