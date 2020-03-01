import getApiResource, { clearCache } from './getApiResource'
import fetch from 'isomorphic-unfetch'

jest.mock('isomorphic-unfetch', () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({ category: 'test' }),
  }),
}))

describe('getApiResource(resource, id)', () => {
  beforeEach(() => clearCache())

  it('makes a request to fetch the resource data', async () => {
    const category = await getApiResource('categories', 'C1')

    expect(category).toEqual({ category: 'test' })
    expect(fetch).toHaveBeenCalledWith(
      'https://api.mercadolibre.com/categories/C1'
    )
  })

  it('caches the result for subsequent requests', async () => {
    const category1 = await getApiResource('categories', 'C1')
    const category2 = await getApiResource('categories', 'C1')

    expect(category1).toEqual({ category: 'test' })
    expect(category2).toEqual({ category: 'test' })
    expect(fetch).toHaveBeenCalledTimes(1)
  })
})
