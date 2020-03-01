import fetch from 'isomorphic-unfetch'
import { MeLiItem } from 'src/types/api'

export default function getItem(id: string): Promise<MeLiItem> {
  return fetch(`https://api.mercadolibre.com/items/${id}`).then(response =>
    response.json()
  )
}
