import React from 'react'
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'

export default function InfoNet() {
    const navigation = useNavigation()
    return (
        <View
            style={styles.container}>
            <Image source={require("../assets/SplashLoadingLogo.png")} style={styles.img} />
            <Text style={styles.text}>Відсутнє підключення до інтернету</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Load')}>
                <Text style={{ color: '#343436', fontSize: 15, marginTop: 10, color: 'gray' }}>Оновити сторінку</Text>
            </TouchableOpacity>
            <StatusBar
                animated={true}
                barStyle={'light-content'}
                backgroundColor="#4BB5F5"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4BB5F5'
    },
    img: {
        width: 100,
        height: 155,
        marginBottom: 100
    },
    text: {
        color: 'white',
        fontSize: 18
    }
})