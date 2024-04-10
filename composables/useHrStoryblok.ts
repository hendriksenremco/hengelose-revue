// @ts-nocheck
export const useHrStoryblok = async (url, params) => {
  const route = useRoute()
  const data = useState(url, () => ref(null))
  const editMode = ref(false)
  const version = 'draft'

  if (route.query?._storyblok) {
    editMode.value = true
  }

  if (editMode.value) {
    const storyblokApiInstance = useStoryblokApi()

    const { data, error } = await storyblokApiInstance.get(url, { ...params, version })
    if (data) {
      data.value = data
    }
    return { data, error }
  }

  const { data: sbData, error} = await useFetch(`http://127.0.0.1:5001/hengelose-revue/us-central1/getStoryblok/${url}`, {query: {...params}})
  if (sbData.value) {
    data.value = sbData.value
    return data.value
  }

  onMounted(async () => {
    await nextTick()
    if (data.value?.story && data.value.story.id) {
      await useStoryblokBridge(
        data.value.story.id,
        evStory => { data.value.story = evStory },
        { preventClicks: true }
      )
    }
  })

  return data 
}