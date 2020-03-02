import getCurrency from 'api/helpers/getCurrency'

export default async function parsePrice(price: number, currencyid: string) {
  // Si hago `price % 1` podría tener problemas de punto
  // flotante, por eso decidí hacerlo de esta manera, me
  // pareció más seguro.

  const [, decimals] = price.toString().split('.')
  const currency = await getCurrency(currencyid)

  return {
    currency: currency.symbol,
    currencyCode: currency.id,
    amount: Math.floor(price),
    decimals: decimals ? parseInt(decimals, 10) : 0,
  }
}
