/* eslint-disable camelcase */ // The linter doesn't like the fonts for some reason
import React from 'react'
import { noop } from 'lodash'
import {
  View,
  Text,
  Pressable
} from 'react-native'
import PropTypes from 'prop-types'
import {
  useFonts,
  Orbitron_400Regular
} from '@expo-google-fonts/dev'
import style from './Listing.style'

export function Listing ({ starship, navigateToDetails }) {
  const [fontsLoaded] = useFonts({ Orbitron_400Regular })
  return (
    <View style={style.listing}>
      <Pressable
        onPress={navigateToDetails}
      >
        {fontsLoaded ? <Text style={{ fontFamily: 'Orbitron_400Regular' }}>{starship?.name}</Text> : <></>}
      </Pressable>
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
