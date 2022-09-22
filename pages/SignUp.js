import React from 'react'
import { Text, View, StatusBar, TextInput, KeyboardAvoidingView, Image, TouchableOpacity, Button } from 'react-native'
import { SignUp_LoginPassword } from '../styles/SignUp_LoginPassword'
import { useState } from 'react'

export default function SignUp({ navigation }) {
    const [number, onChangeText] = useState("+380");

    const loadScenePassword = () => {
        navigation.navigate('LoginPassword');
    }

    return (
        <KeyboardAvoidingView style={SignUp_LoginPassword.container}>
            <Image source={require("../assets/logo.png")} style={SignUp_LoginPassword.img} />

            <View style={SignUp_LoginPassword.box}>
                <Text style={{ color: '#343436', fontSize: 35 }}>Ваш номер</Text>
                <TextInput
                    style={SignUp_LoginPassword.input}
                    onChangeText={onChangeText}
                    keyboardType='phone-pad'
                    value={number}
                />

                <Text style={{ color: '#343436', fontSize: 12 }}>Введіть номер телефону для авторизації</Text>
            </View>
            <TouchableOpacity
                style={SignUp_LoginPassword.button}
                onPress={loadScenePassword}
            >
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