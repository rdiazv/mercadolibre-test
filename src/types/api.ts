export type SearchResultItem = {
  id: string
  title: string
  original_price: number
  price: number
  thumbnail: string
}

export type SearchResults = {
  query: string
  paging: {
    total: number
    offset: number
    limit: number
    primary_results: number
  }
  results: SearchResultItem[]
}
