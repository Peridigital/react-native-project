/* eslint-disable no-undef */
import React from 'react'
import { shallow } from '../../../utils/testing'
import ListPage from '../ListPage'

describe('ListPage', () => {
  it('should render', () => {
    const wrapper = shallow(<ListPage />)

    expect(wrapper).toMatchSnapshot()
  })
})
