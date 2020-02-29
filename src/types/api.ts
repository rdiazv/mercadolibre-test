export type MeLiSearchResult = {
  id: string
  title: string
  original_price: number
  price: number
  thumbnail: string
  currency_id: string
  category_id: string
  condition: string
  shipping: {
    free_shipping: boolean
  }
}

export type MeLiSearch = {
  results: MeLiSearchResult[]
}

export type MeLiCategory = {
  path_from_root: {
    id: string
    name: string
  }[]
}

export type MeLiCurrency = {
  id: string
  symbol: string
  description: string
  decimal_places: number
}
