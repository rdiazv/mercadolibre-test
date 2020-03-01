import fetch from 'isomorphic-unfetch'

// Las monedas y categorías prácticamente no cambian así que
// hay que mantenerlas en cache. En la vida real usaría algo
// como Redis o Memcached, pero lo hice así ahora para
// mantener el ejercicio simple.

type Cache = {
  [resource: string]: {
    [id: string]: unknown
  }
}

const cache: Cache = {}

export default async function getApiResource<T>(
  resource: string,
  id: string
): Promise<T> {
  if (!cache[resource]) {
    cache[resource] = {}
  }

  if (!cache[resource][id]) {
    cache[resource][id] = await fetch(
      `https://api.mercadolibre.com/${resource}/${id}`
    ).then(response => response.json())
  }

  return cache[resource][id] as T
}

export function clearCache() {
  Object.getOwnPropertyNames(cache).forEach(property => {
    delete cache[property]
  })
}
