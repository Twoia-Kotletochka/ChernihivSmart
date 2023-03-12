import React from 'react'
import { View, ActivityIndicator, StyleSheet, Image, StatusBar, Text } from 'react-native'

export default class Loading extends React.Component {

    render() {
        return (
            <View
                style={styles.container}>
                <Image source={require("../../assets/SplashLoadingLogo.png")} style={styles.img} />
                <View style={styles.view_text}>
                    <Text style={styles.text}>Почекай ще хвильку</Text>
                </View>
                <ActivityIndicator color='white' size='large' animating={true} />
                <StatusBar
                    animated={true}
                    barStyle={'light-content'}
                    backgroundColor="#4BB5F5"
                />
            </View>
        )
    }
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
    view_text: {
        marginBottom: 20,
        padding: 3,
        borderColor: 'white',
        borderWidth: 1.5,
        borderRadius: 10,
        alignContent: 'center',
    }
})