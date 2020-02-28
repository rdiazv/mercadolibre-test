import React from 'react'
import { SearchResultItem as SearchResultItemType } from '~/types/api'
import Price from '~/components/Price'
import './SearchResultItem.scss'

type Props = {
  item: SearchResultItemType
}

const SearchResultItem = ({ item }: Props) => (
  <div className="SearchResultItem">
    <div className="SearchResultItem__imageContainer">
      <img src={item.thumbnail} />
    </div>

    <div>
      <div className="SearchResultItem__title">{item.title}</div>
      <Price price={item.price} className="SearchResultItem__price" />
    </div>
  </div>
)

export default SearchResultItem
