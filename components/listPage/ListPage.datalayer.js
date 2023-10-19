import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useQuery, gql } from '@apollo/client'

import ListPage from './ListPage'
import { generateNavigateToDetailsWithId } from './ListPage.utils'

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

  const { data } = useQuery(GET_ALL_STARSHIPS)

  return (
    <ListPage starships={data?.allStarships?.starships} navigateToDetails={generateNavigateToDetailsWithId({ navigation })}/>
  )
}

export default ListPageDatalayer
