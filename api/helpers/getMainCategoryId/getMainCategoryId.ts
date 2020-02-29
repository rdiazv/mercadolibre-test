export default function getMainCategoryId(data: { category_id: string }[]) {
  const hash: { [id: string]: number } = {}

  data.forEach(item => {
    if (!hash[item.category_id]) {
      hash[item.category_id] = 0
    }

    hash[item.category_id] += 1
  })

  return Object.keys(hash).reduce(
    (max, category) => (hash[category] > (hash[max] ?? 0) ? category : max),
    null
  )
}
