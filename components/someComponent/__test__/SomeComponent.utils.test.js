/* eslint-disable no-undef */
import { generateToggleIsActive } from '../SomeComponent.utils'

describe('generateToggleIsActive', () => {
  it('should toggle from true to false', () => {
    const setIsActive = jest.fn()

    generateToggleIsActive({ isActive: true, setIsActive })()

    expect(setIsActive).toHaveBeenCalledWith(false)
  })

  it('should toggle from false to true', () => {
    const setIsActive = jest.fn()

    generateToggleIsActive({ isActive: false, setIsActive })()

    expect(setIsActive).toHaveBeenCalledWith(true)
  })
})
