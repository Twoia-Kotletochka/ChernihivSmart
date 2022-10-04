import React, { useEffect } from 'react'
import { Text, View, ActivityIndicator, TouchableOpacity } from 'react-native'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigation } from '@react-navigation/core'
import SplashLoading from './SplashLoading'

export default function Verify_your_email() {
    const navigation = useNavigation()
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user.emailVerified === true) {
                navigation.replace('Main')
            }
        })

        return unsubscribe
    }, [])

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
            <Text>Активуй пошту</Text>
        </View>
    );
}

