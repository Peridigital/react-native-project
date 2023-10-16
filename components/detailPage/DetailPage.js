import React from 'react'
import {
  View,
  Text
} from 'react-native'
import PropTypes from 'prop-types'
import style from './DetailPage.style'

export function DetailPage ({ starship }) {
  return (
    <View style={style.container}>
      <Text>{starship?.name}</Text>
      <Text>{starship?.model}</Text>
    </View>
  )
}

DetailPage.propTypes = {
  starship: PropTypes.object
}

DetailPage.defaultProps = {
}

export default DetailPage
