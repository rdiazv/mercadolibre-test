import React, { useContext } from 'react'
import { ApiItem } from 'src/types/api'
import Price from 'src/components/Price'
import './Item.scss'
import OriginContext from 'src/components/OriginContext'
import Button from 'src/components/Button'

type Props = {
  item: ApiItem
}

const Item = ({ item: { item } }: Props) => {
  const origin = useContext(OriginContext)

  return (
    <article className="Item" itemScope itemType="http://schema.org/Product">
      <meta itemProp="url" content={`${origin}/items/${item.id}`} />
      <meta
        itemProp="itemCondition"
        content={
          item.condition === 'new'
            ? 'https://schema.org/NewCondition'
            : 'https://schema.org/UsedCondition'
        }
      />

      <div className="Item__contents">
        <figure className="Item__picture">
          <img
            src={item.picture.replace(/https?:/, '')}
            alt={item.title}
            itemProp="image"
          />
        </figure>
        <section className="Item__info">
          <div className="Item__condition">
            {item.condition ? 'Nuevo' : 'Usado'} · {item.sold_quantity}{' '}
            {item.sold_quantity === 1 ? 'vendido' : 'vendidos'}
          </div>
          <h1 itemProp="name">{item.title}</h1>
          <Price price={item.price} className="Item__price" itemProp="offers" />

          <Button>Comprar</Button>
        </section>
      </div>

      {item.description && (
        <section className="Item__description">
          <h2>Descripción del producto</h2>
          <p itemProp="description">{item.description}</p>
        </section>
      )}
    </article>
  )
}

export default Item
