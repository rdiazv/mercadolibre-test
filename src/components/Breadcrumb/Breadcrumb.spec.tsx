import React from 'react'
import Breadcrumb from '.'
import { mount } from 'enzyme'

describe('Breadcrumb', () => {
  it('builds the hierarchy list', () => {
    const container = mount(<Breadcrumb hierarchy={['A', 'B', 'C']} />)

    expect(container).toHaveText('A · B · C')
  })

  it('renders nothing if the hierarchy is empty', () => {
    const container = mount(<Breadcrumb hierarchy={[]} />)

    expect(container).toBeEmptyRender()
  })
})
