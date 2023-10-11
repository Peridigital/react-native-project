import React from 'react'
import { describe, it, expect } from 'jest'
import { shallow } from '../../../utils/testing'
import SomeComponentDatalayer from '../SomeComponent.datalayer'

describe('SomeComponentDatalayer', () => {
  it('should render', () => {
    const wrapper = shallow(<SomeComponentDatalayer/>)

    expect(wrapper).toMatchSnapshot()
  })
})
