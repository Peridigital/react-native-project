/* eslint-disable no-undef */
import React from 'react'
import { shallow } from '../../../utils/testing'
import DetailPage from '../DetailPage'

describe('DetailPage', () => {
  it('should render', () => {
    const wrapper = shallow(<DetailPage />)

    expect(wrapper).toMatchSnapshot()
  })
})
