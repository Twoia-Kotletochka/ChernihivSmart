import { useState } from 'react'
import { signupStyle } from '../styles/main'
import { Text, View, StatusBar } from 'react-native'
import News from '../components/News'


export default function Main() {

    return (
        <View style={signupStyle.container}>

            <View style={signupStyle.box_scroll}>

            </View>
            <View style={signupStyle.box_panel}>
                <News />
            </View>
            <StatusBar
                animated={true}
                barStyle={'light-content'}
                backgroundColor="#4BB5F5"
            />
        </View>
    );
}