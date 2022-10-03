import 'react-native-gesture-handler'
import React from 'react'
//import RegistrPassword from './pages/RegistrPassword'
//import LoginPassword from './pages/LoginPassword'
import Login from './pages/Login'
import Main from './pages/Main'
import Load from './pages/Load'

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
                name="Login"
                component={Login}
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