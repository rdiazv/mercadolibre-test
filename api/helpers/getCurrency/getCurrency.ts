import { MeLiCurrency } from 'src/types/api'
import getApiResource from 'api/helpers/getApiResource'

export default function getCurrency(id: string) {
  return getApiResource<MeLiCurrency>('currencies', id)
}
