import React, { useState } from 'react'
import { KeyboardAvoidingView, Text, View, StatusBar, TextInput, TouchableOpacity } from 'react-native'
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
        <KeyboardAvoidingView style={RegistrationStyle.container}>
            <View style={RegistrationStyle.box}>
                <View style={RegistrationStyle.inputline}>
                    <TextInput
                        style={RegistrationStyle.input}
                        onChangeText={(name) => setName(name)}
                        autoCorrect={false}
                    />
                    <Text style={{ color: '#343436', fontSize: 13 }}>Ім'я</Text>
                </View>
                <View style={RegistrationStyle.inputline}>
                    <TextInput
                        style={RegistrationStyle.input}
                        onChangeText={(tel) => setTel(tel)}
                        keyboardType='phone-pad'
                        autoCorrect={false}
                    />
                    <Text style={{ color: '#343436', fontSize: 13 }}>Номер телефону</Text>
                </View>
                <View style={RegistrationStyle.inputline}>
                    <TextInput
                        style={RegistrationStyle.input}
                        onChangeText={(email) => setEmail(email)}
                        keyboardType='email-address'
                        autoCorrect={false}
                    />
                    <Text style={{ color: '#343436', fontSize: 13 }}>Поштова скринька</Text>
                </View>
                <View style={RegistrationStyle.inputline}>
                    <TextInput
                        style={RegistrationStyle.input}
                        onChangeText={(password) => setPassword(password)}
                        autoCorrect={false}
                        secureTextEntry={false}
                    />
                    <Text style={{ color: '#343436', fontSize: 13 }}>Пароль</Text>
                </View>
                <TouchableOpacity
                    style={RegistrationStyle.button}
                    onPress={() => registerUser(email, password, name, tel)}>
                    <Text style={{ color: 'white', fontSize: 22 }}>Реєстрація</Text>
                </TouchableOpacity>
            </View>
            <StatusBar
                animated={true}
                barStyle={'light-content'}
                backgroundColor="#4BB5F5"
            />
        </KeyboardAvoidingView>
    );
}

export default Registration;
