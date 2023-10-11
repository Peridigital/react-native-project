/**
 * generateNavigateToDetails. Navigates to the details page
 *
 * @param {object} params
 * @param {object} params.navigation - React Navigator navigation object
 * @param {number} params.id - Id of the details
 *
 * @returns {Function} callback - callback that navigates to page
 */
export function generateNavigateToDetails ({ navigation, id }) {
  return () => {
    navigation.navigate({
      name: 'Details',
      params: { id }
    })
  }
}
