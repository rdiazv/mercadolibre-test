import getCurrency from 'api/helpers/getCurrency'
import parsePrice from '.'

jest.mock('api/helpers/getCurrency', () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue({ symbol: '$' }),
}))

describe('parsePrice(price, currencyId)', () => {
  describe('the return value', () => {
    it('includes the price integer amount', async () => {
      await expect(parsePrice(1234.56, 'C1')).resolves.toEqual(
        expect.objectContaining({ amount: 1234 })
      )
    })

    it('includes the price decimals', async () => {
      await expect(parsePrice(1234.56, 'C1')).resolves.toEqual(
        expect.objectContaining({ decimals: 56 })
      )
      await expect(parsePrice(1234, 'C1')).resolves.toEqual(
        expect.objectContaining({ decimals: 0 })
      )
    })

    it('includes the currency symbol', async () => {
      await expect(parsePrice(1234.56, 'C1')).resolves.toEqual(
        expect.objectContaining({ currency: '$' })
      )
      expect(getCurrency).toBeCalledWith('C1')
    })
  })
})
