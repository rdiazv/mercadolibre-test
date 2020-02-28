import React from 'react'
import { SearchResults as SearchResultsType } from '~/types/api'
import SearchResultItem from './SearchResultItem'
import './SearchResults.scss'

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
    <section>
      <ol className="SearchResults__list">
        {items.map(item => (
          <li key={item.id}>
            <SearchResultItem item={item} />
          </li>
        ))}
      </ol>
    </section>
  )
}

export default SearchResults
