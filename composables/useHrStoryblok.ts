// @ts-nocheck
export const useHrStoryblok = async (url, params) => {
  const route = useRoute()
  const data = ref(null)
  const editMode = ref(false)
  const version = 'draft'

  if (route.query?._storyblok) {
    editMode.value = true
  }

  onMounted(async () => {
    await nextTick()
    if (data.value?.story?.id) {
      await useStoryblokBridge(
        data.value.story.id,
        evStory => { data.value.story = evStory },
        { preventClicks: true }
      )
    }
  })

  // if (editMode.value) {
  const storyblokApiInstance = useStoryblokApi()
  const { data: sbData } = await storyblokApiInstance.get(url, { ...params, version })
  if (sbData) {
    data.value = sbData
  }

  return data.value
}
