import { MeLiCategory } from 'src/types/api'
import getApiResource from 'api/helpers/getApiResource'

export default function getCategory(id: string) {
  return getApiResource<MeLiCategory>('categories', id)
}
