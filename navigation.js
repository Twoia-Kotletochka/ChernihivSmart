import React from 'react'
import RegistrPassword from './pages/RegistrPassword'
import LoginPassword from './pages/LoginPassword'
import SignUp from './pages/SignUp'
import Main from './pages/Main'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="LoginPassword"
                component={LoginPassword}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="RegistrPassword"
                component={RegistrPassword}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Main"
                component={Main}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    </NavigationContainer>;
}