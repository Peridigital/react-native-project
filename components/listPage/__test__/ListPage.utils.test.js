/* eslint-disable no-undef */
import { generateNavigateToDetailsWithId, generateListingComponent } from '../ListPage.utils'

describe('generateNavigateToDetailsWithId', () => {
  it('should call navigate function', () => {
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
  it('should return listing component', () => {
    const navigateToDetails = jest.fn()
    const wrapper = generateListingComponent(navigateToDetails)({ item: { name: 'Big Ship', model: 'Big Ship Model' } })

    expect(wrapper).toMatchSnapshot()
  })
})
