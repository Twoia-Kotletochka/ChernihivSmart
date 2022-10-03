import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { firebase } from './config'

import { useNavigation } from '@react-navigation/core'

import Login from './pages/Login'
import Registration from './pages/Registration'
import Main from './pages/Main'

const Stack = createStackNavigator();

function App() {
  const navigation = useNavigation()
  const auth = getAuth();

  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState()

  function onAuthStateChanged(user) {
    setUser(user)
    if (initializing) setInitializing(false)
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber

  }, [])

  if (initializing) return null

  if (!user) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Registration'
          component={Registration}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    )
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Main'
        component={Main}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}

