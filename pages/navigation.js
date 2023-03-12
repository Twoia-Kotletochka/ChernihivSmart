import 'react-native-gesture-handler'
import React from 'react'

import Load from './WaitingPages/Load'
import Login from './Login'
import Registration from './Registration'
import Main from './Main'
import Verify_your_email from './WaitingPages/Verify_your_email'
import InfoNet from './WaitingPages/InfoNet'
import Weather from './Weather/GetWeather'
import Profile from './Profile'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Load"
                component={Load}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="InfoNet"
                component={InfoNet}
                options={{ headerShown: false }}
            />
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
            <Stack.Screen
                name='Verify_your_email'
                component={Verify_your_email}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Main'
                component={Main}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Weather'
                component={Weather}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Profile'
                component={Profile}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    </NavigationContainer>;
}