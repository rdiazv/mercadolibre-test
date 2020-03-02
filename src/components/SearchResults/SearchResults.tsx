import React, { useContext } from 'react'
import { ApiSearch } from 'src/types/api'
import SearchResultItem from './SearchResultItem'
import './SearchResults.scss'
import OriginContext from 'src/components/OriginContext'

type Props = {
  results: ApiSearch
}

const SearchResults = ({ results }: Props) => {
  const origin = useContext(OriginContext)

  return (
    <section>
      <ol
        className="SearchResults__list"
        itemScope
        itemType="http://schema.org/ItemList"
      >
        {results.items.map((item, index) => (
          <li
            key={item.id}
            itemProp="itemListElement"
            itemScope
            itemType="http://schema.org/ListItem"
          >
            <SearchResultItem item={item} />
            <meta itemProp="url" content={`${origin}/items/${item.id}`} />
            <meta itemProp="position" content={`${index + 1}`} />
          </li>
        ))}
      </ol>
    </section>
  )
}

export default SearchResults
