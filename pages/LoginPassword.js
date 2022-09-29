import React, { useRef, useState } from 'react';
import { Text, View, StatusBar, TextInput, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native'
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { firebaseConfig } from '../config';
import firebase from 'firebase/compat/app';
import { SignUp_LoginPassword } from '../styles/SignUp_LoginPassword'


export default function LoginPassword({ navigation }) {

    const loadScenePassword = () => {
        navigation.navigate('Main');
    }

    return (
        <KeyboardAvoidingView
            style={SignUp_LoginPassword.container}
        >
            <Image source={require("../assets/logo.png")} style={SignUp_LoginPassword.img} />
            <View style={SignUp_LoginPassword.box}>
                {/* <Text style={{ color: '#343436', fontSize: 27 }}>Ваш пароль</Text> */}
                <TextInput
                    style={SignUp_LoginPassword.input}
                    onChangeText={setCode}
                    keyboardType='number-pad'
                />

                <Text style={{ color: '#343436', fontSize: 12 }}>Введіть код з смс</Text>
            </View>
            <TouchableOpacity style={SignUp_LoginPassword.button} onPress={confirmCode}>
                <Text style={{ color: 'white', fontSize: 22 }}>Підтвердити код</Text>
            </TouchableOpacity>

            <StatusBar
                animated={true}
                barStyle={'light-content'}
                backgroundColor="#4BB5F5"
            />
        </KeyboardAvoidingView >
    );
}