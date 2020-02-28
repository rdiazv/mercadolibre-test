import React from 'react'
import { SearchResults as SearchResultsType } from '~/types/api'
import SearchResultItem from './SearchResultItem'

type Props = {
  results: SearchResultsType
  pageSize?: number
  page?: number
}

const SearchResults = ({ results, page = 1, pageSize = 4 }: Props) => {
  const fromIndex = (page - 1) * pageSize
  const toIndex = fromIndex + pageSize
  const items = results.results.slice(fromIndex, toIndex)

  return (
    <div>
      {items.map(item => (
        <SearchResultItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default SearchResults
