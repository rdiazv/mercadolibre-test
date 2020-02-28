import { ParsedUrlQuery } from 'querystring'

export default function getQueryKey(query: ParsedUrlQuery, key: string) {
  if (query == null) {
    return null
  }

  const value = query[key]

  return value instanceof Array ? value[0] : value
}
