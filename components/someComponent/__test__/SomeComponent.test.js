import React from 'react'
import { describe, it, expect } from 'jest'
import { shallow } from '../../../utils/testing'
import SomeComponent from '../SomeComponent'

describe('SomeComponent', () => {
  it('should render', () => {
    const wrapper = shallow(<SomeComponent />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should render when active', () => {
    const wrapper = shallow(<SomeComponent isActive={true} />)

    expect(wrapper).toMatchSnapshot()
  })
})
