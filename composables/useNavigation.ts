export const useNavigation = () => {
  const navigation = useState('navigation', () => ref({}))

  const load = async () => {
    const { story } = await useHrStoryblok('cdn/stories/global/navigation', { resolve_relations: 'NavigationItem.items,NavigationItem.parent', resolve_links: 'story' })
    navigation.value = story.content
  }

  return { navigation, load }
}
