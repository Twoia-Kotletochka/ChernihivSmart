import React from 'react'
import { SafeAreaView, ActivityIndicator, StyleSheet, Image, StatusBar } from 'react-native'

export default class Loading extends React.Component {

    render() {
        return (
            <SafeAreaView
                style={styles.container}>
                <Image source={require("../assets/SplashLoadingLogo.png")} style={styles.img} />
                <ActivityIndicator color='white' size='large' animating={true} />
                <StatusBar
                    animated={true}
                    barStyle={'light-content'}
                    backgroundColor="#4BB5F5"
                />
            </SafeAreaView>
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
        marginBottom: 150
    }
})