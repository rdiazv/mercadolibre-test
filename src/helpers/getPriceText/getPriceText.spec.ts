import getPriceText from '.'

describe('getPriceText(price)', () => {
  it('returns the price as text', () => {
    expect(
      getPriceText({
        currency: '$',
        currencyCode: 'USD',
        amount: 123456789,
        decimals: 0,
      })
    ).toBe('$ 123.456.789')

    expect(
      getPriceText({
        currency: '$',
        currencyCode: 'USD',
        amount: 123456789,
        decimals: 123,
      })
    ).toBe('$ 123.456.789,123')
  })
})
