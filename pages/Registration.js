import React, { useState } from 'react'
import { SafeAreaView, Text, View, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import { RegistrationStyle } from '../styles/registration';
import { useNavigation } from '@react-navigation/core'
import { firebase } from '../config'

const Registration = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [tel, setTel] = useState('')

    const navigation = useNavigation()

    const registerUser = async (email, password, name, tel) => {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                firebase.auth().currentUser.sendEmailVerification({
                    handleCodeInApp: true,
                    url: 'https://chesmart-4e30c.firebaseapp.com',
                })
                    .then(() => {
                        alert('Verification email sent')
                    }).catch((error) => {
                        alert(error.message)
                    })
                    .then(() => {
                        firebase.firestore().collection('users')
                            .doc(firebase.auth().currentUser.uid)
                            .set({
                                name,
                                tel,
                                email
                            })
                        navigation.replace('Verify_your_email')
                    })
                    .catch((error) => {
                        alert(error.message)
                    })
            })
            .catch((error => {
                alert(error.message)
            }))
    }

    return (
        <SafeAreaView style={RegistrationStyle.container}>
            <View style={RegistrationStyle.box}>
                <View style={RegistrationStyle.inputline}>
                    <TextInput
                        style={RegistrationStyle.input}
                        placeholder="Ім'я"
                        onChangeText={(name) => setName(name)}
                        autoCorrect={false}
                    />
                </View>
                <View style={RegistrationStyle.inputline}>
                    <TextInput
                        style={RegistrationStyle.input}
                        placeholder="Номер телефону"
                        onChangeText={(tel) => setTel(tel)}
                        keyboardType='phone-pad'
                        autoCorrect={false}
                    />
                </View>
                <View style={RegistrationStyle.inputline}>
                    <TextInput
                        style={RegistrationStyle.input}
                        placeholder="Поштова скринька"
                        onChangeText={(email) => setEmail(email)}
                        keyboardType='email-address'
                        autoCorrect={false}
                    />
                </View>
                <View style={RegistrationStyle.inputline}>
                    <TextInput
                        placeholder="Пароль"
                        style={RegistrationStyle.input}
                        onChangeText={(password) => setPassword(password)}
                        autoCorrect={false}
                        secureTextEntry={false}
                    />
                </View>
                <TouchableOpacity
                    style={RegistrationStyle.button}
                    onPress={() => registerUser(email, password, name, tel)}>
                    <Text style={{ color: 'white', fontSize: 22 }}>Реєстрація</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Text
                        style={{ fontSize: 12 }}>
                        Ви вже маєте аккаунт?
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Registration')}>
                        <Text
                            style={{ fontSize: 17, color: '#4BB5F5' }}>
                            Увійти
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar
                animated={true}
                barStyle={'light-content'}
                backgroundColor="#4BB5F5"
            />
        </SafeAreaView>
    );
}

export default Registration;
