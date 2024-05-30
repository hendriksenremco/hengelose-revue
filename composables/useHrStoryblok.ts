// @ts-nocheck
export const useHrStoryblok = async (url, params) => {
  const route = useRoute()
  const data = ref(null)
  const editMode = ref(true)
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
  // } else {
  //   const { data: sbData } = await useFetch(`https://getstoryblok-dar6adajaq-ey.a.run.app/${url}`, { query: { ...params } })
  //   // const { data: sbData, error} = await useFetch(`http://127.0.0.1:5001/hengelose-revue/europe-west3/getStoryblok/${url}`, {query: {...params}})
  //   if (sbData.value) {
  //     data.value = sbData.value
  //   }
  // }

  return data.value
}
