import React from 'react'
import { Text, View, StatusBar, TextInput, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native'
import { SignUp_LoginPassword } from '../styles/SignUp_LoginPassword'
import { useState } from 'react'


export default function LoginPassword({ navigation }) {
    const [number, onChangeText] = useState("");

    const loadScenePassword = () => {
        navigation.navigate('RegistrPassword');
    }

    return (
        <KeyboardAvoidingView
            style={SignUp_LoginPassword.container}
        >
            <Image source={require("../assets/logo.png")} style={SignUp_LoginPassword.img} />
            <View style={SignUp_LoginPassword.box}>
                <Text style={{ color: '#343436', fontSize: 35 }}>Ваш пароль</Text>
                <TextInput
                    style={SignUp_LoginPassword.input}
                    onChangeText={onChangeText}
                    secureTextEntry={true}
                    keyboardType='password'
                    value={number}
                />

                <Text style={{ color: '#343436', fontSize: 12 }}>Введіть пароль для входу</Text>
            </View>
            <TouchableOpacity
                style={SignUp_LoginPassword.button}
                onPress={loadScenePassword}>
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