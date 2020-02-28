import getQueryKey from '.'

describe('getQueryKey(query, key)', () => {
  describe('if the query is not defined', () => {
    it('returns null', () => {
      expect(getQueryKey(undefined, 'search')).toBe(null)
    })
  })

  describe('if the query is an array', () => {
    it('returns the first element', () => {
      expect(getQueryKey({ search: ['A', 'B'] }, 'search')).toBe('A')
    })
  })

  describe('if the query is a single value', () => {
    it('returns the value', () => {
      expect(getQueryKey({ search: 'A' }, 'search')).toBe('A')
    })
  })
})
