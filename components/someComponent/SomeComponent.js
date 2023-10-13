import React from 'react'
import { noop } from 'lodash'
import {
  Pressable,
  Text,
  View
} from 'react-native'
import PropTypes from 'prop-types'
import style from './SomeComponent.style'

export function SomeComponent ({ isActive, label, toggleIsActive }) {
  return (
    <View style={style.container}>
      <Pressable
        onPress={toggleIsActive}
        style={style.button}
      >
        <Text>Toggle isActive</Text>
      </Pressable>
      <Text>
        {label}
      </Text>
      <Text>
        Current state is: {isActive ? 'active' : 'inactive'}
      </Text>
    </View>
  )
}

SomeComponent.propTypes = {
  isActive: PropTypes.bool,
  label: PropTypes.string,
  toggleIsActive: PropTypes.func
}

SomeComponent.defaultProps = {
  isActive: false,
  label: 'hello world',
  toggleIsActive: noop
}

export default SomeComponent
