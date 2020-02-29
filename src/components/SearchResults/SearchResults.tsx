import React from 'react'
import { ApiSearch } from '~/types/api'
import SearchResultItem from './SearchResultItem'
import './SearchResults.scss'

type Props = {
  results: ApiSearch
}

const SearchResults = ({ results }: Props) => (
  <section>
    <ol className="SearchResults__list">
      {results.items.map(item => (
        <li key={item.id}>
          <SearchResultItem item={item} />
        </li>
      ))}
    </ol>
  </section>
)

export default SearchResults
