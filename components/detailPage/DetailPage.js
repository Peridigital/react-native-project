import React from 'react'
import {
  View,
  Text
} from 'react-native'
import PropTypes from 'prop-types'
import style from './DetailPage.style'
import { LinearGradient } from 'expo-linear-gradient'
import theme from '../../utils/theme'
import Animated from 'react-native-reanimated'

export function DetailPage ({ starship, hyperdriveAnimation }) {
  const { right, top, scale } = hyperdriveAnimation
  return (
    <View style={style.container}>
      <LinearGradient style={style.gradientBackground} colors={[theme.spaceBackground, theme.primaryBackground]} />
      <Animated.Image style={{ ...style.shipImage, right, top, transform: [{ scale }] }} source={{ uri: 'https://static.wikia.nocookie.net/starwars/images/2/24/TantiveIV-TSWB.png/revision/latest?cb=20221006055135' }}/>
      <View style={style.titleContainer}>
        <Text style={style.title}>{starship?.name}</Text>
        <Text style={style.detailText}>{starship?.costInCredits} Credits</Text>
      </View>
      <View style={style.detailContainer}>
        <View style={style.detailRow}>
          <Text style={style.detailText}>Speed:</Text>
          <Text style={style.detailText}>{starship?.MGLT} MGLT/h</Text>
        </View>
        <View style={style.detailRow}>
          <Text style={style.detailText}>Cargo Capacity:</Text>
          <Text style={style.detailText}>{starship?.cargoCapacity} kg</Text>
        </View>
        <View style={style.detailRow}>
          <Text style={style.detailText}>Crew:</Text>
          <Text style={style.detailText}>{starship?.crew}</Text>
        </View>
        <View style={style.detailRow}>
          <Text style={style.detailText}>Passengers:</Text>
          <Text style={style.detailText}>{starship?.passengers}</Text>
        </View>
        <View style={style.detailRow}>
          <Text style={style.detailText}>Provisions:</Text>
          <Text style={style.detailText}>{starship?.consumables}</Text>
        </View>
        <View style={style.detailRow}>
          <Text style={style.detailText}>Length:</Text>
          <Text style={style.detailText}>{starship?.length} m</Text>
        </View>
        <View style={style.detailRow}>
          <Text style={style.detailText}>Starship Class:</Text>
          <Text style={style.detailText}>{starship?.starshipClass}</Text>
        </View>
      </View>
    </View>
  )
}

DetailPage.propTypes = {
  starship: PropTypes.object,
  hyperdriveAnimation: PropTypes.object
}

DetailPage.defaultProps = {
  hyperdriveAnimation: {
    right: { value: 0 },
    top: { value: 0 },
    scale: { value: 1 }
  }
}

export default DetailPage
