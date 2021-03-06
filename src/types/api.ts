export type ApiPrice = {
  currency: string
  currencyCode: string
  amount: number
  decimals: number
}

export type ApiSearchResult = {
  id: string
  title: string
  price: ApiPrice
  picture: string
  state_name: string
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

export type ApiItem = {
  author: {
    name: string
    lastname: string
  }
  categories: string[]
  item: {
    id: string
    title: string
    price: ApiPrice
    picture: string
    condition: 'new' | 'used'
    free_shipping: boolean
    sold_quantity: number
    description: string
  }
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
  address: {
    state_name: string
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
