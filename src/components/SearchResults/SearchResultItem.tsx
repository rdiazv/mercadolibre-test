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
    <div
      className="SearchResultItem"
      itemScope
      itemType="http://schema.org/Product"
    >
      <meta
        itemProp="itemCondition"
        content={
          item.condition === 'new'
            ? 'https://schema.org/NewCondition'
            : 'https://schema.org/UsedCondition'
        }
      />

      <figure className="SearchResultItem__imageContainer">
        <a href={url} itemProp="url">
          <img src={item.picture} alt={item.title} itemProp="image" />
        </a>
      </figure>

      <div>
        <h2 className="SearchResultItem__title" itemProp="name">
          <a href={url} itemProp="url">
            {item.title}
          </a>
        </h2>

        <Price
          price={item.price}
          className="SearchResultItem__price"
          itemProp="offers"
        />
      </div>
    </div>
  )
}

export default SearchResultItem
