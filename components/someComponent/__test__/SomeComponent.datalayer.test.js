/* eslint-disable no-undef */
import React from 'react'
import { shallow } from '../../../utils/testing'
import SomeComponentDatalayer from '../SomeComponent.datalayer'

describe('SomeComponentDatalayer', () => {
  it('should render', () => {
    const wrapper = shallow(<SomeComponentDatalayer/>)

    expect(wrapper).toMatchSnapshot()
  })
})
