import React, { useState } from 'react'
import { SafeAreaView, Text, View, StatusBar, TextInput, TouchableOpacity, Alert } from 'react-native'
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
                        Alert.alert("Попередження", 'Підтвердіть ваш аккаунт. Лист відправлено на пошту.')
                    }).catch((error) => {
                        alert(error.message)
                        //console.log("Error Підтвердження аккаунта.")
                    })
                    .then(() => {
                        firebase.firestore().collection('users')
                            .doc(firebase.auth().currentUser.uid)
                            .set({
                                name,
                                tel,
                                email,
                                password
                            })
                        navigation.replace('Verify_your_email')
                    })
                    .catch((error) => {
                        alert(error.message)
                        //console.log("Error collection('users')")
                    })
            })
            .catch((error => {
                if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
                    Alert.alert("Помилка", "Довжина пароля має бути мінімум 6 символів.")
                }
                else { alert(error.message) }
                //console.log(error.message)
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
                        maxLength={10}
                    />
                </View>
                <View style={RegistrationStyle.inputline}>
                    <TextInput
                        style={RegistrationStyle.input}
                        placeholder="Номер телефону"
                        onChangeText={(tel) => setTel(tel)}
                        keyboardType='phone-pad'
                        autoCorrect={false}
                        maxLength={13}
                    />
                </View>
                <View style={RegistrationStyle.inputline}>
                    <TextInput
                        style={RegistrationStyle.input}
                        placeholder="Поштова скринька"
                        onChangeText={(email) => setEmail(email)}
                        keyboardType='email-address'
                        autoCorrect={false}
                        maxLength={55}
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
                        onPress={() => navigation.navigate('Login')}>
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
