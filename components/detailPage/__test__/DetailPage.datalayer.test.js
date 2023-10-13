/* eslint-disable no-undef */
import React from 'react'
import { shallow } from '../../../utils/testing'
import DetailPageDatalayer from '../DetailPage.datalayer'

jest.mock('@react-navigation/native', () => ({
  useRoute: jest.fn()
}))

jest.mock('@apollo/client', () => ({
  useQuery: jest.fn(() => ({ })),
  gql: jest.fn()
}))

describe('DetailPageDatalayer', () => {
  it('should render', () => {
    const wrapper = shallow(<DetailPageDatalayer/>)

    expect(wrapper).toMatchSnapshot()
  })
})
