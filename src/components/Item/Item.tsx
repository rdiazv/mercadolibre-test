import React from 'react'
import { ApiItem } from 'src/types/api'
import Price from 'src/components/Price'
import './Item.scss'

type Props = {
  item: ApiItem
}

const Item = ({ item: { item } }: Props) => (
  <section className="Item">
    <div className="Item__contents">
      <figure className="Item__picture">
        <img src={item.picture} alt={item.title} />
      </figure>
      <section className="Item__info">
        <div className="Item__condition">
          {item.condition ? 'Nuevo' : 'Usado'} · {item.sold_quantity}{' '}
          {item.sold_quantity === 1 ? 'vendido' : 'vendidos'}
        </div>
        <h1>{item.title}</h1>
        <Price price={item.price} className="Item__price" />
        <button>Comprar</button>
      </section>
    </div>

    {item.description && (
      <section className="Item__description">
        <h2>Descripción del producto</h2>
        <p>{item.description}</p>
      </section>
    )}
  </section>
)

export default Item
