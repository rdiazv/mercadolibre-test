import getItemDescription from './getItemDescription'
import fetch from 'isomorphic-unfetch'

jest.mock('isomorphic-unfetch', () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({ plain_text: 'test' }),
  }),
}))

describe('getItemDescription(query)', () => {
  it('makes a request to fetch the search results', async () => {
    const item = await getItemDescription('1')

    expect(item).toEqual({ plain_text: 'test' })
    expect(fetch).toHaveBeenCalledWith(
      'https://api.mercadolibre.com/items/1/description'
    )
  })
})
