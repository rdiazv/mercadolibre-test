import getSearchResults from './getSearchResults'
import fetch from 'node-fetch'

jest.mock('node-fetch', () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue([{ id: 1 }, { id: 2 }]),
  }),
}))

describe('getSearchResults(query)', () => {
  it('makes a request to fetch the search results', async () => {
    const results = await getSearchResults('guitar')

    expect(results).toEqual([{ id: 1 }, { id: 2 }])
    expect(fetch).toHaveBeenCalledWith(
      'https://api.mercadolibre.com/sites/MLA/search?q=guitar'
    )
  })
})
