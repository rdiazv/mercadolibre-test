import fetch from 'isomorphic-unfetch'
import getItem from '.'

jest.mock('isomorphic-unfetch', () => ({
  __esModule: true,
  default: jest.fn((url: string) =>
    Promise.resolve({
      json: jest
        .fn()
        .mockResolvedValue(
          url === 'https://api.mercadolibre.com/items/1'
            ? { id: 1 }
            : { status: 404 }
        ),
    })
  ),
}))

describe('getItem(query)', () => {
  it('makes a request to fetch the search results', async () => {
    await expect(getItem('1')).resolves.toEqual({ id: 1 })
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/1')
  })

  it('returns null if the api responds 404', async () => {
    await expect(getItem('2')).resolves.toBe(null)
  })
})
