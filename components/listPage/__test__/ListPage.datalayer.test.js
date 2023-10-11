/* eslint-disable no-undef */
import React from 'react'
import { shallow } from '../../../utils/testing'
import ListPageDatalayer from '../ListPage.datalayer'

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn()
}))

describe('ListPageDatalayer', () => {
  it('should render', () => {
    const wrapper = shallow(<ListPageDatalayer/>)

    expect(wrapper).toMatchSnapshot()
  })
})
