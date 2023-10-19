/* eslint-disable no-undef */
import React from 'react'
import { shallow } from '../../../utils/testing'
import ListPageDatalayer from '../ListPage.datalayer'

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn()
}))

jest.mock('@apollo/client', () => ({
  useQuery: jest.fn(() => ({ })),
  gql: jest.fn()
}))
jest.mock('@expo-google-fonts/dev', () => ({
  useFonts: jest.fn(() => ([]))
}))

describe('ListPageDatalayer', () => {
  it('should render', () => {
    const wrapper = shallow(<ListPageDatalayer/>)

    expect(wrapper).toMatchSnapshot()
  })
})
