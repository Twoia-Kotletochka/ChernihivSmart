import React from 'react'
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function InfoNet() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/SplashLoadingLogo.png")} style={styles.img} />
            <MaterialCommunityIcons name="wifi-strength-3-alert" size={50} color="white" />
            <Text style={styles.text}>Відсутнє підключення до інтернету</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Load')}
                style={styles.button}>

                <Text style={styles.text_refresh}>Спробувати ще раз</Text>

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
    },
    button: {
        marginTop: 10,
        borderColor: 'white',
        borderWidth: 1.5,
        borderRadius: 10,
        alignContent: 'center',
    },
    text_refresh: {
        color: 'white',
        fontSize: 15,
        padding: 4,
    }
})