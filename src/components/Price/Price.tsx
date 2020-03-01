import React, { HTMLProps } from 'react'
import { ApiPrice } from 'src/types/api'
import formatNumber from 'src/helpers/formatNumber'
import './Price.scss'

type Props = HTMLProps<HTMLSpanElement> & {
  price: ApiPrice
}

const Price = ({ price: { currency, amount, decimals }, ...props }: Props) => (
  <span {...props}>
    <span className="Price">
      {currency} {formatNumber(amount)}
      {decimals > 0 && <span className="Price__fraction">{decimals}</span>}
    </span>
  </span>
)

export default Price
