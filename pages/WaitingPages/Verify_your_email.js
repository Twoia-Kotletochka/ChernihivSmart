import React, { useEffect } from 'react'
import { Text, View, StatusBar, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigation } from '@react-navigation/core'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Verify_your_email() {
    const navigation = useNavigation()
    const auth = getAuth();

    const signout = () => {
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
        <View style={styles.container}>
            <Image source={require("../../assets/logo.png")} style={styles.img} />

            <View style={styles.box}>
                <View style={{ alignItems: 'center', }}>
                    <Text style={{ fontSize: 15, marginBottom: 3 }}>Активуйте аккаунт та спробуйте увійти.</Text>
                    <Text style={{ fontSize: 15, marginBottom: 3 }}>Лист відправлено на пошту.</Text>
                    <Text style={{ fontSize: 14, marginBottom: 3 }}>Перевірте папку спам.</Text>
                </View>
                <MaterialCommunityIcons name="email-send" size={70} color="#4BB5F5" />
                <TouchableOpacity
                    style={styles.button}
                    onPress={signout}>
                    <Text style={styles.text}>Увійти</Text>
                </TouchableOpacity>
            </View>
            <StatusBar
                animated={true}
                barStyle={'light-content'}
                backgroundColor="#4BB5F5"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '90%',
        height: 230,
        borderRadius: 10,
        elevation: 9
    },
    img: {
        width: 130,
        height: 130,
        marginTop: -180,
        marginBottom: 70
    },
    text: {
        color: '#343436', fontSize: 20, color: 'white'
    },
    button: {
        marginTop: 10,
        marginBottom: 10,
        height: 40,
        width: 200,
        color: 'red',
        backgroundColor: '#4BB5F5',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },

})