import React from 'react'
import { MeLiSearchResult } from '~/types/api'
import Price from '~/components/Price'
import './SearchResultItem.scss'

type Props = {
  item: MeLiSearchResult
}

const SearchResultItem = ({ item }: Props) => {
  const url = `/items/${item.id}`

  return (
    <div className="SearchResultItem">
      <div className="SearchResultItem__imageContainer">
        <a href={url}>
          <img src={item.thumbnail} />
        </a>
      </div>

      <div>
        <a href={url} className="SearchResultItem__title">
          {item.title}
        </a>

        {item.original_price && (
          <Price
            price={item.original_price}
            className="SearchResultItem__originalPrice"
          />
        )}

        <Price price={item.price} className="SearchResultItem__price" />
      </div>
    </div>
  )
}

export default SearchResultItem
