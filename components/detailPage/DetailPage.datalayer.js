import React from 'react'
import { useRoute } from '@react-navigation/native'
import { useQuery, gql } from '@apollo/client'

import DetailPage from './DetailPage'

export function DetailPageDatalayer (props) {
  const route = useRoute()
  const getStarshipById = gql`
    query typicodeQuery {
      starship(id: "${route?.params.id}") {
        name
        model
      }
    }
`
  const { data } = useQuery(getStarshipById)
  return (
    <DetailPage starship={data?.starship}/>
  )
}

export default DetailPageDatalayer
