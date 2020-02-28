import React from 'react'
import { SearchResultItem as SearchResultItemType } from '~/types/api'
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
      <div className="SearchResultItem__price">{item.price}</div>
    </div>
  </div>
)

export default SearchResultItem
