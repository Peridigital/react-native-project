import React from 'react'
import { noop } from 'lodash'
import {
  View,
  Text,
  Pressable,
  FlatList
} from 'react-native'
import PropTypes from 'prop-types'
import style from './ListPage.style'
import { generateListingComponent } from './ListPage.utils'

export function ListPage ({ starships, navigateToDetails }) {
  return (
    <View style={style.container}>
      <FlatList
          data={starships}
          renderItem={generateListingComponent(navigateToDetails)}
        />
    </View>
  )
}

ListPage.propTypes = {
  starships: PropTypes.array,
  navigateToDetails: PropTypes.func
}

ListPage.defaultProps = {
  navigateToDetails: noop
}

export default ListPage
