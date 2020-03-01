import { ApiPrice } from 'src/types/api'
import formatNumber from 'src/helpers/formatNumber'

export default function getPriceText(price: ApiPrice) {
  const text = `${price.currency} ${formatNumber(price.amount)}`

  return price.decimals ? `${text},${price.decimals}` : text
}
