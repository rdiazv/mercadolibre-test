import getApiResource from 'api/helpers/getApiResource'
import getCategory from '.'

jest.mock('api/helpers/getApiResource', () => ({
  __esModule: true,
  default: jest.fn((_, id) => Promise.resolve({ id })),
}))

describe('getCategory(id)', () => {
  it('makes a cached request to get the category data', async () => {
    const category = await getCategory('C1')

    expect(getApiResource).toHaveBeenCalledWith('categories', 'C1')
    expect(category).toEqual({ id: 'C1' })
  })
})
