import React, { useEffect } from 'react'
import { Text, View, ActivityIndicator, TouchableOpacity } from 'react-native'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigation } from '@react-navigation/core'
import App from '../../App'

export default function Verify_your_email() {
    const navigation = useNavigation()
    const auth = getAuth();

    const signout = () => {
        console.log("s2")
        auth.signOut()
        navigation.replace('Login')
    }

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
            <Text>Активуй аккаунт та спробуйте увійти знову. Лист відправлено на пошту. Перевірте папаку спам.</Text>
            <TouchableOpacity
                onPress={signout}>
                <Text style={{ color: '#343436', fontSize: 20, marginTop: 10, color: 'gray' }}>Увійти</Text>
            </TouchableOpacity>
        </View>
    );
}

