import React, { HTMLProps } from 'react'
import './Price.scss'

type Props = HTMLProps<HTMLSpanElement> & {
  price: number
}

const Price = ({ price, ...props }: Props) => {
  const [integer, fraction] = price.toString().split('.')

  return (
    <span {...props}>
      <span className="Price">
        $ {integer.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
        {fraction && <span className="Price__fraction">{fraction}</span>}
      </span>
    </span>
  )
}

export default Price
