import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import NetInfo from "@react-native-community/netinfo";
import SplashLoading from './SplashLoading'
export default function App() {
    const navigation = useNavigation()
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            NetInfo.fetch().then(state => {
                console.log("isConnected: " + state.isConnected)
                console.log("isInternetReachable: " + state.isInternetReachable)
                if ((state.isConnected && state.isInternetReachable)) {
                    try {
                        if (user) {
                            if (user.emailVerified === true) {
                                navigation.replace('Main')
                            }
                            else {
                                navigation.replace('Verify_your_email')
                            }
                        }
                        else {
                            navigation.replace('Login')
                        }
                    } catch (error) {
                        alert(error.message)
                    }
                }
                else {
                    navigation.replace('InfoNet')
                }
            });
        })

        return unsubscribe
    }, [])

    return (
        <SplashLoading />
    );
}