import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { useQuery, gql } from '@apollo/client'
import { useSharedValue } from 'react-native-reanimated'
import { generateHyperdriveAnimation } from './DetailPage.util'
import DetailPage from './DetailPage'

export function DetailPageDatalayer (props) {
  const route = useRoute()
  const getStarshipById = gql`
    query typicodeQuery {
      starship(id: "${route?.params.id}") {
        MGLT
        cargoCapacity
        consumables
        costInCredits
        crew
        hyperdriveRating
        length
        model
        name
        passengers
        starshipClass
      }
    }
`
  const { data } = useQuery(getStarshipById)

  const right = useSharedValue(-500)
  const top = useSharedValue(-100)
  const scale = useSharedValue(0)

  useEffect(generateHyperdriveAnimation(right, top, scale), [])

  return (
    <DetailPage starship={data?.starship} hyperdriveAnimation={{ right, top, scale }}/>
  )
}

export default DetailPageDatalayer
