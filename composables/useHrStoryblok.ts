// @ts-nocheck
export const useHrStoryblok = async (url, params) => {
  const route = useRoute()
  const data = ref(null)
  const editMode = ref(false)
  const version = ref('live')

  if (route.query?._storyblok) {
    editMode.value = false
    version.value = 'draft'
  }

  onMounted(async () => {
    await nextTick()
    if (data.value?.story?.id && editMode.value) {
      await useStoryblokBridge(
        data.value.story.id,
        evStory => { data.value.story = evStory },
        { preventClicks: true }
      )
    }
  })

  const storyblokApiInstance = useStoryblokApi()
  const { data: sbData } = await storyblokApiInstance.get(url, { ...params, version: version.value })
  if (sbData) {
    data.value = sbData
  }

  return data.value
}
