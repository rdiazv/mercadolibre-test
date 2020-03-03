import React, { useContext } from 'react'
import { ApiSearchResult } from 'src/types/api'
import Price from 'src/components/Price'
import './SearchResultItem.scss'
import OriginContext from 'src/components/OriginContext'
import Link from 'next/link'
import freeShippingUrl from './free_shipping.png'

type Props = {
  item: ApiSearchResult
}

const SearchResultItem = ({ item }: Props) => {
  const origin = useContext(OriginContext)
  const url = `${origin}/items/${item.id}`

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
        <Link href="items/[id]" as={url} passHref>
          <a itemProp="url">
            <img
              src={item.picture.replace(/https?:/, '')}
              alt={item.title}
              itemProp="image"
            />
          </a>
        </Link>
      </figure>

      <div className="SearchResultItem__info">
        <h2 className="SearchResultItem__title" itemProp="name">
          <Link href="items/[id]" as={url} passHref>
            <a itemProp="url">{item.title}</a>
          </Link>
        </h2>

        <div className="SearchResultItem__priceRow">
          <Price
            price={item.price}
            className="SearchResultItem__price"
            itemProp="offers"
          />

          {item.free_shipping && (
            <img
              src={freeShippingUrl}
              width={18}
              height={18}
              className="SearchResultItem__freeShipping"
              alt="Envío gratuito"
              title="Envío gratuito"
            />
          )}
        </div>

        {item.state_name && (
          <div className="SearchResultItem__addressXS">{item.state_name}</div>
        )}
      </div>

      {item.state_name && (
        <div className="SearchResultItem__addressSM">{item.state_name}</div>
      )}
    </div>
  )
}

export default SearchResultItem
