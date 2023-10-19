import React from 'react'
import { noop } from 'lodash'
import {
  View,
  Text,
  Pressable
} from 'react-native'
import PropTypes from 'prop-types'

export function Listing ({ starship, navigateToDetails }) {
  console.log('hello')
  return (
    <View >
      <Pressable
        onPress={navigateToDetails}
      ><Text>{starship?.name}</Text></Pressable>
    </View>
  )
}

Listing.propTypes = {
  starship: PropTypes.object,
  navigateToDetails: PropTypes.func
}

Listing.defaultProps = {
  navigateToDetails: noop
}

export default Listing
