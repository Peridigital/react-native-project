/**
 * generateToggleIsActive. Toggles the state between true and false
 *
 * @param {object} params
 * @param {boolean} params.isActive - whether the state is currently active
 * @param {boolean} params.setIsActive - callback that sets the state
 *
 * @returns {Function} callback - callback that toggles the state
 */
export function generateToggleIsActive({ isActive, setIsActive }) {
  return () => {
    setIsActive(!isActive);
  }
}
