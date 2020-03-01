import { ApiPrice } from '~/types/api'
import formatNumber from '~/helpers/formatNumber'

export default function getPriceText(price: ApiPrice) {
  const text = `${price.currency} ${formatNumber(price.amount)}`

  return price.decimals ? `${text},${price.decimals}` : text
}
