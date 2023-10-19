/* eslint-disable no-undef */
import { generateNavigateToDetailsWithId, generateListingComponent } from '../ListPage.utils'

describe('generateNavigateToDetailsWithId', () => {
  it('should toggle from true to false', () => {
    const navigation = {
      navigate: jest.fn()
    }
    const id = 1
    generateNavigateToDetailsWithId({ navigation })(id)()

    expect(navigation.navigate).toHaveBeenCalledWith({
      name: 'Details',
      params: { id }
    })
  })
})

describe('generateListingComponent', () => {
  it('should toggle from true to false', () => {
    const navigateToDetails = jest.fn()
    const wrapper = generateListingComponent(navigateToDetails)({ item: { name: 'Big Ship', model: 'Big Ship Model' } })

    expect(wrapper).toMatchSnapshot()
  })
})
