import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListPage from './components/listPage'
import DetailPage from './components/detailPage'
import * as Linking from 'expo-linking'

const prefix = Linking.createURL('/')

const Stack = createNativeStackNavigator()

const apolloClient = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache()
})

export default function App () {
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Home: '',
        Details: 'details/:id'
      }
    }
  }
  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer linking={linking}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={ListPage} />
          <Stack.Screen name="Details" component={DetailPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  )
}
