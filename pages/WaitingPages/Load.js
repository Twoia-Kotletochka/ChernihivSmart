// import React, { useEffect, useState } from 'react'
// import { useNavigation } from '@react-navigation/core'
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import NetInfo from "@react-native-community/netinfo";
// import SplashLoading from './SplashLoading'

// export default function App() {
//     const navigation = useNavigation()
//     const auth = getAuth();

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (user) => {
//             NetInfo.fetch().then(state => {
//                 console.log("isConnected: " + state.isConnected)
//                 console.log("isInternetReachable: " + state.isInternetReachable)
//                 if ((state.isConnected && state.isInternetReachable)) {
//                     try {
//                         if (user) {
//                             if (user.emailVerified === true) {
//                                 console.log("Юзер тру " + user.emailVerified)
//                                 navigation.replace('Main')
//                             }
//                             else {
//                                 console.log("Юзер нноо " + user.emailVerified)
//                                 navigation.replace('Verify_your_email')
//                             }
//                         }
//                         else {
//                             navigation.replace('Login')
//                         }
//                     } catch (error) {
//                         if (error.message === 'Firebase error : Error (auth/network-request-failed).') {
//                             Alert.alert("Помилка", "Проблеми з підключенням до мережі")
//                         }
//                         else {
//                             alert(error.message)
//                         }
//                     }
//                 }
//                 else {
//                     navigation.replace('InfoNet')
//                 }
//             });
//         })

//         return unsubscribe
//     }, [])

//     return (
//         <SplashLoading />
//     );
//}

import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import firebase from '../../config'; // Экспортируйте firebase как в вашем коде
import NetInfo from '@react-native-community/netinfo';
import { Alert } from 'react-native';
import SplashLoading from './SplashLoading';

export default function App() {
    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
            try {
                const state = await NetInfo.fetch();

                console.log("isConnected: ", state.isConnected);
                console.log("isInternetReachable: ", state.isInternetReachable);

                if (state.isConnected && state.isInternetReachable) {
                    if (user) {
                        if (user.emailVerified) {
                            console.log("Пользователь подтвержден:", user.emailVerified);
                            navigation.replace('Main');
                        } else {
                            console.log("Пользователь не подтвержден:", user.emailVerified);
                            navigation.replace('Verify_your_email');
                        }
                    } else {
                        navigation.replace('Login');
                    }
                } else {
                    navigation.replace('InfoNet');
                }
            } catch (error) {
                if (error.message.includes('auth/network-request-failed')) {
                    Alert.alert("Ошибка", "Проблемы с подключением к сети");
                } else {
                    Alert.alert("Ошибка", error.message);
                }
            }
        });

        return () => unsubscribe();
    }, [navigation]);

    return <SplashLoading />;
}
