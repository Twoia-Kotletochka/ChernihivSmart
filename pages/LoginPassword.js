import { Text, View, StatusBar, TextInput, KeyboardAvoidingView, Image, TouchableHighlight, TouchableOpacity } from 'react-native'
import { LoginPasswordStyle } from '../styles/SignUp+LoginPassword'
import { useState } from 'react'


export default function LoginPassword() {
    const [number, onChangeText] = useState("");

    return (
        <KeyboardAvoidingView
            style={LoginPasswordStyle.container}
        >
            <Image source={require("../assets/logo.png")} style={LoginPasswordStyle.img} />
            <View style={LoginPasswordStyle.box}>
                <Text style={[signupStyle.text, { fontSize: 35 }]}>Ваш пароль</Text>
                <TextInput
                    style={signupStyle.input}
                    onChangeText={onChangeText}
                    secureTextEntry={true}
                    keyboardType='password'
                    value={number}
                />

                <Text style={[LoginPasswordStyle.text, { fontSize: 12 }]}>Введіть пароль для входу</Text>
            </View>
            <TouchableOpacity
                style={LoginPasswordStyle.button}>
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