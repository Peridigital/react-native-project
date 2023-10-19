/* eslint-disable camelcase */ // The linter doesn't like the fonts for some reason

import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useQuery, gql } from '@apollo/client'

import ListPage from './ListPage'
import { generateNavigateToDetailsWithId } from './ListPage.utils'
import {
  useFonts,
  Orbitron_400Regular
} from '@expo-google-fonts/dev'

const GET_ALL_STARSHIPS = gql`
  query typicodeQuery {
    allStarships {
      starships {
        name
        id
      }
    }
  }
`

export function ListPageDatalayer () {
  const navigation = useNavigation()
  const [hasFontsLoaded] = useFonts({ Orbitron_400Regular })
  const { data } = useQuery(GET_ALL_STARSHIPS)

  return (
    <ListPage starships={data?.allStarships?.starships} navigateToDetails={generateNavigateToDetailsWithId({ navigation })} hasFontsLoaded={hasFontsLoaded}/>
  )
}

export default ListPageDatalayer
