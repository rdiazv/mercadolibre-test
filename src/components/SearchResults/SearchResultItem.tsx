import React from 'react'
import { ApiSearchResult } from '~/types/api'
import Price from '~/components/Price'
import './SearchResultItem.scss'

type Props = {
  item: ApiSearchResult
}

const SearchResultItem = ({ item }: Props) => {
  const url = `/items/${item.id}`

  return (
    <div className="SearchResultItem">
      <div className="SearchResultItem__imageContainer">
        <a href={url}>
          <img src={item.picture} />
        </a>
      </div>

      <div>
        <a href={url} className="SearchResultItem__title">
          {item.title}
        </a>

        <Price price={item.price} className="SearchResultItem__price" />
      </div>
    </div>
  )
}

export default SearchResultItem
