import React from 'react'
import { SearchResultItem as SearchResultItemType } from '~/types/api'

type Props = {
  item: SearchResultItemType
}

const SearchResultItem = ({ item }: Props) => (
  <div>
    <img src={item.thumbnail} />
    <div>{item.price}</div>
    <div>{item.title}</div>
  </div>
)

export default SearchResultItem
