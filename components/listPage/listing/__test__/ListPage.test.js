/* eslint-disable no-undef */
import React from 'react'
import { shallow } from '../../../../utils/testing'
import Listing from '../Listing'

describe('Listing', () => {
  it('should render', () => {
    const wrapper = shallow(<Listing />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should render text when font loaded', () => {
    const wrapper = shallow(<Listing hasFontsLoaded={true} />)

    expect(wrapper).toMatchSnapshot()
  })
})
