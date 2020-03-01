import fetch from 'isomorphic-unfetch'
import { MeLiSearch } from '~/types/api'

export default function getSearchResults(query: string): Promise<MeLiSearch> {
  return fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${query}`
  ).then(response => response.json())
}
