import React, { useRef, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SplashLoading from './SplashLoading'
export default function App() {
    const navigation = useNavigation()

    const auth = getAuth();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigation.replace('Main')
            }
            else {
                navigation.replace('SignUp')
            }
        })

        return unsubscribe
    }, [])


    return (
        <SplashLoading />
    );
}

