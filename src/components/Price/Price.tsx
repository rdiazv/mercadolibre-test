import React, { HTMLProps } from 'react'
import { ApiPrice } from '~/types/api'
import './Price.scss'

type Props = HTMLProps<HTMLSpanElement> & {
  price: ApiPrice
}

const Price = ({ price: { currency, amount, decimals }, ...props }: Props) => (
  <span {...props}>
    <span className="Price">
      {currency} {amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
      {decimals > 0 && <span className="Price__fraction">{decimals}</span>}
    </span>
  </span>
)

export default Price
