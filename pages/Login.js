import React, { useState } from 'react'
import { Text, View, StatusBar, TextInput, Image, TouchableOpacity, SafeAreaView, ActivityIndicator, Alert } from 'react-native';
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
            navigation.replace('Verify_your_email')
        } catch (error) {
            if (error.message === 'Firebase: Error (auth/invalid-email).') {
                Alert.alert("Помилка", "Помилка в написанні електронної адреси.")
            }
            else if (error.message === 'Firebase: Error (auth/wrong-password).') {
                Alert.alert("Помилка", "Не правильний пароль")
            }
            else if (error.message === 'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).') {
                Alert.alert("Помилка", "Загато невдалих спроб входу. Ви можете негайно відновити його,скинувши пароль, або спробувати ще раз пізніше.")
            }
            else if (error.message === 'Firebase: Error (auth/user-not-found).') {
                Alert.alert("Помилка", "Такого користувача не існує")
            }
            else { Alert.alert(error.message) }

            //console.log(error.message)
        }
    }

    return (
        <SafeAreaView style={LoginStyle.container}>

            <Image source={require("../assets/logo.png")} style={LoginStyle.img} />

            <View style={LoginStyle.box}>

                <TextInput
                    style={LoginStyle.input}
                    placeholder='Введіть електронний адрес'
                    onChangeText={(email) => setEmail(email)}
                    keyboardType='email-address'
                    autoCorrect={false}
                    autoCapitalize='none'
                    maxLength={55}
                />

                <TextInput
                    style={[LoginStyle.input]}
                    placeholder='Введіть пароль'
                    onChangeText={(password) => setPassword(password)}
                    keyboardType='visible-password'
                    autoCorrect={false}
                    autoCapitalize='none'
                    secureTextEntr={false}
                />

                <TouchableOpacity
                    style={LoginStyle.button}
                    onPress={() => loginUser(email, password)}>
                    <Text style={{ color: 'white', fontSize: 22 }}>Увійти</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Text
                        style={{ fontSize: 12 }}>
                        Ви новий користувач?
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Registration')}>
                        <Text
                            style={{ fontSize: 17, color: '#4BB5F5' }}>
                            Зареєструватися
                        </Text>
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