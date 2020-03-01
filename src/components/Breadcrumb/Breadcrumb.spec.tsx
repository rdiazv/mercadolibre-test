import React from 'react'
import Breadcrumb from './Breadcrumb'
import { mount } from 'enzyme'

describe('Breadcrumb', () => {
  it('builds the hierarchy list', () => {
    const container = mount(<Breadcrumb hierarchy={['A', 'B', 'C']} />)

    expect(container).toHaveText('A · B · C')
  })
})
