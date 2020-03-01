import getPriceText from './getPriceText'

describe('getPriceText(price)', () => {
  it('returns the price as text', () => {
    expect(
      getPriceText({ currency: '$', amount: 123456789, decimals: 0 })
    ).toBe('$ 123.456.789')
    expect(
      getPriceText({ currency: '$', amount: 123456789, decimals: 123 })
    ).toBe('$ 123.456.789,123')
  })
})
