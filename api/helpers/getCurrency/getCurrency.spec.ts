import getCurrency from './getCurrency'
import getApiResource from 'api/helpers/getApiResource'

jest.mock('api/helpers/getApiResource', () => ({
  __esModule: true,
  default: jest.fn((_, id) => Promise.resolve({ id })),
}))

describe('getCurrency(id)', () => {
  it('makes a cached request to get the currency data', async () => {
    const currency = await getCurrency('C1')

    expect(getApiResource).toHaveBeenCalledWith('currencies', 'C1')
    expect(currency).toEqual({ id: 'C1' })
  })
})
