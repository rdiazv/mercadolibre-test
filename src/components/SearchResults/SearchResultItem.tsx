import React from 'react'
import { ApiSearchResult } from 'src/types/api'
import Price from 'src/components/Price'
import './SearchResultItem.scss'

type Props = {
  item: ApiSearchResult
}

const SearchResultItem = ({ item }: Props) => {
  const url = `/items/${item.id}`

  return (
    <div className="SearchResultItem">
      <figure className="SearchResultItem__imageContainer">
        <a href={url}>
          <img src={item.picture} alt={item.title} />
        </a>
      </figure>

      <div>
        <h2 className="SearchResultItem__title">
          <a href={url}>{item.title}</a>
        </h2>

        <Price price={item.price} className="SearchResultItem__price" />
      </div>
    </div>
  )
}

export default SearchResultItem
