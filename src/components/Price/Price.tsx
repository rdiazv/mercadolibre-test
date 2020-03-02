import React, { HTMLProps } from 'react'
import { ApiPrice } from 'src/types/api'
import formatNumber from 'src/helpers/formatNumber'
import './Price.scss'

type Props = HTMLProps<HTMLSpanElement> & {
  price: ApiPrice
}

const Price = ({
  price: { currency, currencyCode, amount, decimals },
  ...props
}: Props) => (
  <span {...props} itemScope itemType="http://schema.org/Offer">
    <meta itemProp="priceCurrency" content={currencyCode} />
    <meta itemProp="price" content={`${amount}.${decimals}`} />

    <span className="Price">
      {currency} {formatNumber(amount)}
      {decimals > 0 && <span className="Price__fraction">{decimals}</span>}
    </span>
  </span>
)

export default Price
