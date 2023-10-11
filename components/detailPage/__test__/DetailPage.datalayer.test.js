/* eslint-disable no-undef */
import React from 'react'
import { shallow } from '../../../utils/testing'
import DetailPageDatalayer from '../DetailPage.datalayer'

describe('DetailPageDatalayer', () => {
  it('should render', () => {
    const wrapper = shallow(<DetailPageDatalayer/>)

    expect(wrapper).toMatchSnapshot()
  })
})
