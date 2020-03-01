export type ApiPrice = {
  currency: string
  amount: number
  decimals: number
}

export type ApiSearchResult = {
  id: string
  title: string
  price: ApiPrice
  picture: string
  condition: 'new' | 'used'
  free_shipping: boolean
}

export type ApiSearch = {
  author: {
    name: string
    lastname: string
  }
  categories: string[]
  items: ApiSearchResult[]
}

export type MeLiSearchResult = {
  id: string
  title: string
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

export type MeLiItem = {
  id: string
  title: string
  price: number
  thumbnail: string
  currency_id: string
  category_id: string
  condition: string
  sold_quantity: number
  shipping: {
    free_shipping: boolean
  }
}

export type MeLiItemDescription = {
  plain_text: string
}
