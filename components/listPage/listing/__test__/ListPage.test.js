/* eslint-disable no-undef */
import React from 'react'
import { shallow } from '../../../../utils/testing'
import Listing from '../Listing'

describe('Listing', () => {
  it('should render', () => {
    const wrapper = shallow(<Listing />)

    expect(wrapper).toMatchSnapshot()
  })
})
