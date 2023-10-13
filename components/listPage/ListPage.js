import React from 'react'
import { noop } from 'lodash'
import {
  View,
  Text,
  Pressable
} from 'react-native'
import PropTypes from 'prop-types'
import style from './ListPage.style'

export function ListPage ({ navigateToDetails }) {
  return (
    <View style={style.container}>
      <Text> Hi there</Text>
      <Pressable
        onPress={navigateToDetails}
        style={style.button}
      ><Text>Click here</Text></Pressable>
    </View>
  )
}

ListPage.propTypes = {
  navigateToDetails: PropTypes.func
}

ListPage.defaultProps = {
  navigateToDetails: noop
}

export default ListPage
