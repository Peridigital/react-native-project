import React from 'react'
import { noop } from 'lodash'
import {
  View,
  FlatList
} from 'react-native'
import PropTypes from 'prop-types'
import style from './ListPage.style'
import { generateListingComponent } from './ListPage.utils'

export function ListPage ({ starships, navigateToDetails, hasFontsLoaded }) {
  return (
    <View style={style.container}>
      <FlatList
          data={starships}
          renderItem={generateListingComponent(navigateToDetails, hasFontsLoaded)}
        />
    </View>
  )
}

ListPage.propTypes = {
  starships: PropTypes.array,
  navigateToDetails: PropTypes.func,
  hasFontsLoaded: PropTypes.bool
}

ListPage.defaultProps = {
  navigateToDetails: noop,
  hasFontsLoaded: false
}

export default ListPage
