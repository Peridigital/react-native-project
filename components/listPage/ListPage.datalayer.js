import React from 'react'
import { useNavigation } from '@react-navigation/native'

import ListPage from './ListPage'
import { generateNavigateToDetails } from './ListPage.utils'

export function ListPageDatalayer () {
  const navigation = useNavigation()
  return (
    <ListPage navigateToDetails={generateNavigateToDetails({ navigation, id: 1 })}/>
  )
}

export default ListPageDatalayer
