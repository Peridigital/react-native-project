/* eslint-disable no-undef */
import { generateNavigateToDetails } from '../ListPage.utils'

describe('generateNavigateToDetails', () => {
  it('should toggle from true to false', () => {
    const navigation = {
      navigate: jest.fn()
    }
    const id = 1
    generateNavigateToDetails({ navigation, id })()

    expect(navigation.navigate).toHaveBeenCalledWith({
      name: 'Details',
      params: { id }
    })
  })
})
