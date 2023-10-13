import React from 'react'
import Listing from './listing'
/**
 * generateNavigateToDetailsWithId. Navigates to the details page
 *
 * @param {object} params
 * @param {object} params.navigation - React Navigator navigation object
 *
 * @returns {Function} callback - generator function that takes an id and returns a callback that navigates to details page with that id
 */
export function generateNavigateToDetailsWithId ({ navigation }) {
  return (id) => {
    return () => {
      navigation.navigate({
        name: 'Details',
        params: { id }
      })
    }
  }
}

/**
 * generateListingComponent. Returns callback to render a Listing component for use in a list
 *
 * @param {Function} navigateToDetails - Callback function that navigates to that ship's detail page
 *
 * @returns {Function} callback - Callback to render a Listing component
 */
export function generateListingComponent (navigateToDetails) {
  const wrapper = ({ item }) => {
    return <Listing starship={item} navigateToDetails={navigateToDetails(item.id)}/>
  }

  return wrapper
}
