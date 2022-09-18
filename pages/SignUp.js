import { Text, View, StatusBar, TextInput, KeyboardAvoidingView, Image, TouchableHighlight, TouchableOpacity } from 'react-native'
import { signupStyle } from '../styles/signup'
import { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function SignUp() {
    const [number, onChangeText] = useState("+380");
    return (
        <KeyboardAvoidingView
            style={signupStyle.container}
        >

            <Image source={require("../assets/logo.png")} style={signupStyle.img} />

            <View style={signupStyle.box}>
                <Text style={[signupStyle.text, { fontSize: 35 }]}>Ваш номер</Text>
                <TextInput
                    style={signupStyle.input}
                    onChangeText={onChangeText}
                    keyboardType='phone-pad'
                    value={number}
                />

                <Text style={[signupStyle.text, { fontSize: 12 }]}>Введіть номер телефону для авторизації</Text>
            </View>
            <TouchableOpacity
                style={signupStyle.button}>
                <Text style={{ color: 'white', fontSize: 22 }}>Далі</Text>
            </TouchableOpacity>

            <StatusBar
                animated={true}
                barStyle={'light-content'}
                backgroundColor="#4BB5F5"
            />
        </KeyboardAvoidingView >
    );
}