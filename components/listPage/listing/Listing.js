import React from 'react'
import { noop } from 'lodash'
import {
  View,
  Text,
  Image,
  Pressable
} from 'react-native'
import PropTypes from 'prop-types'
import style from './Listing.style'
import { LinearGradient } from 'expo-linear-gradient'
import theme from '../../../utils/theme'

export function Listing ({ starship, navigateToDetails, hasFontsLoaded }) {
  return (
    <Pressable
      onPress={navigateToDetails}
    >
      <View style={style.listingBorder}>
      <View style={style.listingFlair} />
        <View style={style.listing}>
            <Image style={style.shipImage} source={{ uri: 'https://static.wikia.nocookie.net/starwars/images/2/24/TantiveIV-TSWB.png/revision/latest?cb=20221006055135' }}/>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={style.gradientBackground} colors={[theme.primaryBackground, 'rgba(0,0,0,0)']} />
            {hasFontsLoaded ? <Text style={{ fontFamily: 'Orbitron_400Regular', ...style.title }}>{starship?.name}</Text> : <></>}
        </View>

      </View>
    </Pressable>
  )
}

Listing.propTypes = {
  starship: PropTypes.object,
  navigateToDetails: PropTypes.func,
  hasFontsLoaded: PropTypes.bool
}

Listing.defaultProps = {
  navigateToDetails: noop,
  hasFontsLoaded: false
}

export default Listing
