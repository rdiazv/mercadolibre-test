import getMainCategoryId from './getMainCategoryId'

describe('getMainCategoryId(data)', () => {
  it('returns the most common category of the given results', () => {
    const categoryId = getMainCategoryId([
      { category_id: 'C1' },
      { category_id: 'C1' },
      { category_id: 'C2' },
      { category_id: 'C3' },
      { category_id: 'C3' },
      { category_id: 'C1' },
    ])

    expect(categoryId).toBe('C1')
  })
})
