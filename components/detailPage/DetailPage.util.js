import { withTiming, Easing, withDelay, withSequence } from 'react-native-reanimated'
/**
 * generateHyperdriveAnimation. Animates the right top and scale animation objects used for animating the hyperdrive effect.
 *
 * @param {object} right - Animation object for the right property
 * @param {object} top - Animation object for the top property
 * @param {object} scale - Animation object for the scale property
 *
 * @returns {Function} callback - generates a function that animates the given values
 */
export function generateHyperdriveAnimation (right, top, scale) {
  return () => {
    const timing1 = {
      duration: 150,
      easing: Easing.linear
    }
    const timing2 = {
      duration: 200,
      easing: Easing.out(Easing.quad)
    }
    right.value = withSequence(
      withDelay(500, withTiming(-5, timing1)),
      withTiming(0, timing2)
    )
    top.value = withSequence(
      withDelay(500, withTiming(-1, timing1)),
      withTiming(0, timing2)
    )
    scale.value = withSequence(
      withDelay(500, withTiming(0.99, timing1)),
      withTiming(1, timing2)
    )
  }
}
