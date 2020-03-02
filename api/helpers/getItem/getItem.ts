import fetch from 'isomorphic-unfetch'
import { MeLiItem } from 'src/types/api'

export default async function getItem(id: string): Promise<MeLiItem> {
  const item = await fetch(
    `https://api.mercadolibre.com/items/${id}`
  ).then(response => response.json())

  if (item.status === 404) {
    return null
  }

  return item
}
