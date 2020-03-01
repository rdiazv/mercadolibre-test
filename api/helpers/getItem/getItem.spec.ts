import getItem from './getItem'
import fetch from 'isomorphic-unfetch'

jest.mock('isomorphic-unfetch', () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({ id: 1 }),
  }),
}))

describe('getItem(query)', () => {
  it('makes a request to fetch the search results', async () => {
    const item = await getItem('1')

    expect(item).toEqual({ id: 1 })
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/1')
  })
})
