import fetch from 'isomorphic-unfetch'
import { MeLiItemDescription } from '~/types/api'

export default function getItem(id: string): Promise<MeLiItemDescription> {
  return fetch(
    `https://api.mercadolibre.com/items/${id}/description`
  ).then(response => response.json())
}
