import React, { useState } from 'react'
import { Text, View, StatusBar, TextInput, Image, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/core'
import { LoginStyle } from '../styles/login';
import { firebase } from '../config'

const Login = () => {
    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = async (email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (error) {
            alert(error.message)
        }
    }


    return (
        <SafeAreaView style={LoginStyle.container}>
            <Image source={require("../assets/logo.png")} style={LoginStyle.img} />

            <View style={LoginStyle.box}>
                <View>
                    <TextInput
                        style={LoginStyle.input}
                        onChangeText={(email) => setEmail(email)}
                        keyboardType='email-address'
                        autoCorrect={false}
                        autoCapitalize='none'
                    />

                    <Text style={{ color: '#343436', fontSize: 12 }}>Введіть електронний адрес</Text>
                </View>

                <View style={[LoginStyle.phonebox, {}]}>
                    <TextInput
                        style={[LoginStyle.input, { width: 100, }]}
                        onChangeText={(password) => setPassword(password)}
                        autoCorrect={false}
                        autoCapitalize='none'
                        secureTextEntr={false}
                    />
                    <Text style={{ color: '#343436', fontSize: 12 }}>Введіть пароль</Text>

                    <TouchableOpacity
                        style={LoginStyle.button}
                        onPress={() => loginUser(email, password)}>
                        <Text style={{ color: 'white', fontSize: 22 }}>Увійти</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Registration')}>
                        <Text style={{ color: '#343436', fontSize: 10 }}>Реєстрація</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View
                style={[LoginStyle.loadwindowscreen, { display: 'none' }]}>
                <View style={LoginStyle.loadwindowmodal}>
                    <ActivityIndicator color='white' size='large' animating={true} />
                </View>
            </View>
            <StatusBar
                animated={true}
                barStyle={'light-content'}
                backgroundColor="#4BB5F5"
            />
        </SafeAreaView >
    )
}

export default Login;