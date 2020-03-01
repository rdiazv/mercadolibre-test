import formatNumber from './formatNumber'

describe('formatNumber(number)', () => {
  it('add thousand separators to the number', () => {
    expect(formatNumber(123456789)).toBe('123.456.789')
  })
})
